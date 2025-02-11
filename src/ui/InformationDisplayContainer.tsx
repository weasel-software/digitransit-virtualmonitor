import React, { FC, useState, useEffect } from 'react';
import { getStopsAndStationsFromViews } from '../util/monitorUtils';
import { useQuery } from '@apollo/client';
import { GET_STOP_ALERTS, GET_STATION_ALERTS } from '../queries/alertQueries';
import {
  GetAlertsForStations,
  GetAlertsForStationsVariables,
} from '../generated/GetAlertsForStations';
import {
  GetAlertsForStops,
  GetAlertsForStopsVariables,
} from '../generated/GetAlertsForStops';
import { uniqBy, cloneDeep } from 'lodash';
import Loading from './Loading';
import InformationDisplayCarousel from './InformationDisplayCarousel';
import { IMonitor } from '../util/Interfaces';

interface IProps {
  readonly monitor: IMonitor;
  preview?: boolean;
}

const getStopAlerts = stops => {
  const alerts = [];
  stops.forEach(stop => {
    alerts.push(...stop.alerts);
    stop.routes.forEach(route => {
      alerts.push(...route.alerts);
    });
  });
  return alerts;
};

const getStationAlerts = stations => {
  const alerts = [];
  stations.forEach(station => {
    alerts.push(...getStopAlerts(station.stops));
  });
  return alerts;
};
const InformationDisplayContainer: FC<IProps> = ({
  monitor,
  preview = false,
}) => {
  const [stopIds, stationIds] = getStopsAndStationsFromViews(monitor.cards);
  const [stopsFetched, setStopsFetched] = useState(stopIds.length < 1);
  const [stationsFetched, setStationsFetched] = useState(stationIds.length < 1);

  const [stopAlerts, setStopAlerts] = useState([]);
  const [stationAlerts, setStationAlerts] = useState([]);
  const [view, setView] = useState(cloneDeep(monitor).cards[0]);

  const stationsState = useQuery<
    GetAlertsForStations,
    GetAlertsForStationsVariables
  >(GET_STATION_ALERTS, {
    variables: { ids: stationIds },
    pollInterval: 180000,
    skip: stationIds.length < 1,
    context: { clientName: 'default' },
  });

  const stopsState = useQuery<GetAlertsForStops, GetAlertsForStopsVariables>(
    GET_STOP_ALERTS,
    {
      variables: { ids: stopIds },
      pollInterval: 180000,
      skip: stopIds.length < 1,
      context: { clientName: 'default' },
    },
  );
  const ViewWithLocation = (lat, lon) => {
    const newView = {
      ...view,
    };
    newView.columns.left.stops[0] = {
      ...newView.columns.left.stops[0],
      lat: lat,
      lon: lon,
    };
    return newView;
  };
  useEffect(() => {
    const stops = stopsState?.data?.stops;
    if (stops?.length > 0) {
      const alerts = getStopAlerts(stops);
      setView(ViewWithLocation(stops[0].lat, stops[0].lon));
      setStopAlerts(
        alerts.length ? uniqBy(alerts, alert => alert.alertHeaderText) : [],
      );
      setStopsFetched(true);
    }
  }, [stopsState.data]);

  useEffect(() => {
    const stations = stationsState?.data?.stations;
    if (stations?.length > 0) {
      const alerts = getStationAlerts(stations);
      setView(ViewWithLocation(stations[0].lat, stations[0].lon));
      setStationAlerts(
        alerts.length ? uniqBy(alerts, alert => alert.alertHeaderText) : [],
      );
      setStationsFetched(true);
    }
  }, [stationsState.data]);

  if (!stopsFetched || !stationsFetched) {
    return <Loading />;
  }
  return (
    <InformationDisplayCarousel
      view={view}
      alerts={[...stopAlerts, ...stationAlerts]}
      languages={monitor.languages}
      preview={preview}
    />
  );
};

export default InformationDisplayContainer;
