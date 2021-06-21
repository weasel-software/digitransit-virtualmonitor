import React, { FC, useState, useEffect } from 'react';
import { gql, QueryResult, useQuery } from '@apollo/client';
import Titlebar from './Titlebar';
import TitlebarTime from './TitlebarTime';
import Logo from './logo/Logo';
import MonitorRowContainer from './MonitorRowContainer';
import { getLayout } from '../util/getLayout';
import { IMonitorConfig } from '../App';
import { IDeparture } from './MonitorRow';
import { EpochMilliseconds } from '../time';

const GET_DEPARTURES = gql`
  query GetDepartures($ids: [String!]!, $numberOfDepartures: Int!) {
    stops: stops(ids: $ids) {
      name
      gtfsId
      routes {
        longName
        id
      }
      stoptimesForPatterns(numberOfDepartures: $numberOfDepartures) {
        pattern {
          code
          route {
            gtfsId
          }
        }
        stoptimes {
          serviceDay
          scheduledArrival
          realtimeArrival
          arrivalDelay
          scheduledDeparture
          realtimeDeparture
          departureDelay
          headsign
          trip {
            gtfsId
            route {
              shortName
            }
          }
        }
      }
    }
  }
`;

const GET_DEPARTURES_FOR_STATIONS = gql`
  query GetDeparturesForStations($ids: [String!]!, $numberOfDepartures: Int!) {
    stations: stations(ids: $ids) {
      name
      gtfsId
      routes {
        longName
        id
      }
      stops {
        routes {
          gtfsId
        }
      }
      stoptimesForPatterns(numberOfDepartures: $numberOfDepartures) {
        pattern {
          code
          route {
            gtfsId
          }
        }
        stoptimes {
          serviceDay
          scheduledArrival
          realtimeArrival
          arrivalDelay
          scheduledDeparture
          realtimeDeparture
          departureDelay
          headsign
          trip {
            gtfsId
            route {
              shortName
            }
          }
        }
      }
    }
  }
`;

interface IStop {
  code: string;
  desc: string;
  gtfsId: string;
  locationType: string;
  name: string;
  hiddenRoutes: Array<any>;
}
interface ISides {
  stops: Array<IStop>;
  title: string;
}
interface IColumn {
  left: ISides;
  right: ISides;
}
interface IView {
  columns: IColumn;
  title: string;
  layout: number;
  duration: number;
}

const getDeparturesWithoutHiddenRoutes = (stop, hiddenRoutes) => {
  const departures = [];
  stop.stoptimesForPatterns.forEach(stoptimeList => {
    if (!hiddenRoutes.includes(stoptimeList.pattern.code)) {
      departures.push(...stoptimeList.stoptimes);
    }
  });
  return departures;
};

const loopStops = (data, stops) => {
  const departures: Array<IDeparture> = [];
  data.stops.forEach(stop => {
    let routesToHide: Array<string> = stops
      .find(s => {
        return s.gtfsId === stop.gtfsId;
      })
      ?.hiddenRoutes.map(route => route.code);
    if (!routesToHide || !routesToHide[0]) {
      routesToHide = [];
    }
    const stoptimes: Array<any> = stops.find(s => {
      return s.gtfsId === stop.gtfsId;
    })?.stoptimes;
    departures.push(...getDeparturesWithoutHiddenRoutes(stop, routesToHide));
  });
  return departures;
};

const loopStations = (data, stops) => {
  const departures: Array<IDeparture> = [];
  data.stations
    .filter(s => s)
    .forEach(station => {
      const routes = [];
      station.stops.forEach(stop => routes.push(...stop.routes));
      let routesToHide = stops
        .find(s => {
          return s.gtfsId === station.gtfsId;
        })
        ?.hiddenRoutes.map(route => route.code);
      if (!routesToHide || !routesToHide[0]) {
        routesToHide = [];
      }
      const stationWithRoutes = {
        ...station,
        routes: routes,
      };
      departures.push(
        ...getDeparturesWithoutHiddenRoutes(stationWithRoutes, routesToHide),
      );
    });
  return departures;
};
interface IProps {
  readonly view: IView;
  readonly config: IMonitorConfig;
  readonly noPolling?: boolean;
  readonly index: number;
  readonly time?: EpochMilliseconds;
}
const Monitor: FC<IProps> = ({ view, index, config, noPolling, time }) => {
  const [skip, setSkip] = useState(false);
  const [monitorDataStopLeft, setMonitorDataStopLeft] = useState([]);
  const [monitorDataStopRight, setMonitorDataStopRight] = useState([]);
  const [monitorDataStationLeft, setMonitorDataStationLeft] = useState([]);
  const [monitorDataStationRight, setMonitorDataStationRight] = useState([]);
  const [stopDeparturesLeft, setStopDeparturesLeft] = useState([]);
  const [stopDeparturesRight, setStopDeparturesRight] = useState([]);
  const [stationDeparturesLeft, setStationDeparturesLeft] = useState([]);
  const [stationDeparturesRight, setStationDeparturesRight] = useState([]);
  const [stopsFetched, setStopsFetched] = useState(false);
  const [stationsFetched, setStationsFetched] = useState(false);

  // Don't poll on preview
  const pollInterval = noPolling ? 0 : 30000;
  const isMultiDisplay = getLayout(view.layout)[2];

  const stopIdsLeft = [];
  const stopIdsRight = [];
  const stationIdsLeft = [];
  const stationIdsRight = [];

  let stopStateRight: QueryResult<
    any,
    { ids: any[]; numberOfDepartures: number }
  >;
  let stationStateRight: QueryResult<
    any,
    { ids: any[]; numberOfDepartures: number }
  >;

  view.columns.left.stops.forEach(stop => {
    stop.locationType === 'STOP'
      ? stopIdsLeft.push(stop.gtfsId)
      : stationIdsLeft.push(stop.gtfsId);
  });

  if (isMultiDisplay) {
    view.columns.right.stops.forEach(stop => {
      stop.locationType === 'STOP'
        ? stopIdsRight.push(stop.gtfsId)
        : stationIdsRight.push(stop.gtfsId);
    });
  }

  const stopStateLeft = useQuery(GET_DEPARTURES, {
    variables: { ids: stopIdsLeft, numberOfDepartures: 24 },
    pollInterval: pollInterval,
    skip: skip,
  });

  const stationStateLeft = useQuery(GET_DEPARTURES_FOR_STATIONS, {
    variables: { ids: stationIdsLeft, numberOfDepartures: 24 },
    pollInterval: pollInterval,
    skip: skip,
  });

  if (isMultiDisplay) {
    stopStateRight = useQuery(GET_DEPARTURES, {
      variables: { ids: stopIdsRight, numberOfDepartures: 24 },
      pollInterval: pollInterval,
      skip: skip,
    });

    stationStateRight = useQuery(GET_DEPARTURES_FOR_STATIONS, {
      variables: { ids: stationIdsRight, numberOfDepartures: 24 },
      pollInterval: pollInterval,
      skip: skip,
    });
  }

  useEffect(() => {
    if (monitorDataStopLeft[index]?.stops) {
      setSkip(true);
    }
  }, [monitorDataStopLeft]);

  useEffect(() => {
    if (monitorDataStopRight[index]?.stops) {
      setSkip(true);
    }
  }, [monitorDataStopRight]);

  useEffect(() => {
    if (monitorDataStationLeft[index]?.stations) {
      setSkip(true);
    }
  }, [monitorDataStationLeft]);

  useEffect(() => {
    if (monitorDataStationRight[index]?.stations) {
      setSkip(true);
    }
  }, [monitorDataStationRight]);

  useEffect(() => {
    if (stopStateLeft.previousData?.stations) {
      const currentData = monitorDataStopLeft;
      currentData[index] = stopStateLeft.previousData;
      setMonitorDataStopLeft(currentData);
      setTimeout(() => setSkip(false), pollInterval);
    }
  }, [stopStateLeft.previousData]);

  useEffect(() => {
    if (isMultiDisplay && stopStateRight.previousData?.stations) {
      const currentData = monitorDataStopRight;
      currentData[index] = stopStateRight.previousData;
      setMonitorDataStopRight(currentData);
      setTimeout(() => setSkip(false), pollInterval);
    }
  }, [stopStateRight?.previousData]);

  useEffect(() => {
    if (stationStateLeft.previousData?.stations) {
      const currentData = monitorDataStationLeft;
      currentData[index] = stationStateLeft.previousData;
      setMonitorDataStationLeft(currentData);
      setTimeout(() => setSkip(false), pollInterval);
    }
  }, [stationStateLeft.previousData]);

  useEffect(() => {
    if (isMultiDisplay && stationStateRight.previousData?.stations) {
      const currentData = monitorDataStationRight;
      currentData[index] = stationStateRight.previousData;
      setMonitorDataStationRight(currentData);
      setTimeout(() => setSkip(false), pollInterval);
    }
  }, [stationStateRight?.previousData]);

  useEffect(() => {
    if (stopStateLeft.data?.stops) {
      const departures: Array<IDeparture> = loopStops(
        stopStateLeft.data,
        view.columns.left.stops,
      );
      setStopDeparturesLeft(departures);
      setStopsFetched(!isMultiDisplay ? true : false);
    }
    if (!stopIdsLeft.length) {
      setStopsFetched(!isMultiDisplay ? true : false);
    }
  }, [stopStateLeft]);

  useEffect(() => {
    if (isMultiDisplay && stopStateRight.data?.stops) {
      const departures: Array<IDeparture> = loopStops(
        stopStateRight.data,
        view.columns.right.stops,
      );
      setStopDeparturesRight(departures);
      setStopsFetched(true);
    }
    if (isMultiDisplay && !stopIdsRight.length) {
      setStopsFetched(true);
    }
  }, [stopStateRight]);

  useEffect(() => {
    if (stationStateLeft.data?.stations) {
      const departures: Array<IDeparture> = loopStations(
        stationStateLeft.data,
        view.columns.left.stops,
      );
      setStationDeparturesLeft(departures);
      setStationsFetched(isMultiDisplay ? false : true);
    }
    if (!stationIdsLeft.length) {
      setStationsFetched(isMultiDisplay ? false : true);
    }
  }, [stationStateLeft]);

  useEffect(() => {
    if (isMultiDisplay && stationStateRight.data?.stations) {
      const departures: Array<IDeparture> = loopStations(
        stationStateRight.data,
        view.columns.right.stops,
      );
      setStationDeparturesRight(departures);
      setStationsFetched(true);
    }
    if (isMultiDisplay && !stationIdsRight.length) {
      setStationsFetched(true);
    }
  }, [stationStateRight]);

  const loading = !isMultiDisplay
    ? stopStateLeft.loading || stationStateLeft.loading
    : stopStateLeft.loading ||
      stopStateRight.loading ||
      stationStateLeft.loading ||
      stationStateRight.loading;

  if (loading) {
    return <div>LOADING</div>;
  }
  const currentTime = time ? time : new Date().getTime();
  return (
    <div className="main-content-container">
      <Titlebar>
        <Logo monitorConfig={config} />
        {!isMultiDisplay && (
          <div
            id={'title-text'}
            style={{
              fontSize: 'min(4vw, 4em)',
              justifyContent: 'center',
            }}
          >
            {view.title}
          </div>
        )}
        <TitlebarTime
          currentTime={currentTime}
          updateInterval={noPolling ? 0 : 20000}
        />
      </Titlebar>
      {stationsFetched && stopsFetched && (
        <MonitorRowContainer
          departuresLeft={[...stopDeparturesLeft, ...stationDeparturesLeft]}
          departuresRight={[...stopDeparturesRight, ...stationDeparturesRight]}
          layout={getLayout(view.layout)}
          leftTitle={view.columns.left.title}
          rightTitle={view.columns.right.title}
        />
      )}
    </div>
  );
};

export default Monitor;
