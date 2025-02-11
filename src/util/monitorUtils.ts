import { getCurrentSeconds } from '../time';
import uniqBy from 'lodash/uniqBy';
import { IClosedStop } from './Interfaces';
import xmlParser from 'fast-xml-parser';
import { trainStationMap } from '../util/trainStations';
import { validate as uuidValidate, version as uuidVersion } from 'uuid';
import dummyAlerts, { getDummyAlerts } from '../testAlert';
import SunCalc from 'suncalc';

const WEATHER_URL =
  'https://opendata.fmi.fi/wfs?service=WFS&version=2.0.0&request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::simple&timestep=5&parameters=temperature,WindSpeedMS,WeatherSymbol3';

const delay = ms =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const stopTimeAbsoluteDepartureTime = (stopTime: any) =>
  stopTime.serviceDay + stopTime.realtimeDeparture;

export const stringifyPattern = pattern => {
  return [
    pattern.route.gtfsId,
    pattern.route.shortName,
    capitalize(pattern.headsign),
    pattern.code.split(':')[2],
  ].join(':');
};

export const getStopsAndStationsFromViews = views => {
  const stopIds = [];
  const stationIds = [];

  views.forEach(view => {
    Object.keys(view.columns).forEach(col => {
      view.columns[col].stops?.forEach(stop => {
        stop.locationType === 'STOP'
          ? stopIds.push(stop.gtfsId)
          : stationIds.push(stop.gtfsId);
      });
    });
  });

  return [stopIds, stationIds];
};

export const filterDepartures = (
  stop,
  hiddenRoutes,
  timeshift,
  showEndOfLine = false,
  showStopNumber,
  showVia,
) => {
  const departures = [];
  const arrivalDepartures = [];
  const currentSeconds = getCurrentSeconds();

  if (!showEndOfLine && stop.stoptimesForPatterns) {
    stop.stoptimesForPatterns.forEach(stp =>
      stp.stoptimes.forEach(s => {
        if (s.pickupType === 'NONE') {
          arrivalDepartures.push(stringifyPattern(stp.pattern));
        }
        return s.pickupType !== 'NONE';
      }),
    );
  }
  stop.stoptimesForPatterns.forEach(stoptimeList => {
    const combinedPattern = stringifyPattern(stoptimeList.pattern);

    if (
      !hiddenRoutes.includes(combinedPattern) &&
      !arrivalDepartures.includes(combinedPattern)
    ) {
      let stoptimes = [];
      stoptimeList.stoptimes.forEach(item =>
        stoptimes.push({
          ...item,
          combinedPattern: combinedPattern,
          showStopNumber: showStopNumber,
          showVia: showVia,
          vehicleMode: stop.vehicleMode?.toLowerCase(),
        }),
      );

      if (timeshift > 0) {
        stoptimes = stoptimes.filter(s => {
          return (
            s.serviceDay + s.realtimeDeparture >=
            currentSeconds + (parseInt(timeshift) + 1) * 60
          );
        });
      }
      departures.push(...stoptimes);
    }
  });
  return departures;
};
const getTranslationStringsForStop = (stop, hiddenRoutes) => {
  const stringsToTranslate = [];
  stop.stoptimesForPatterns.forEach(stopTimeForPattern => {
    if (!hiddenRoutes.includes(stringifyPattern(stopTimeForPattern.pattern))) {
      let headsign = stopTimeForPattern.stoptimes[0].headsign;
      if (headsign?.includes(' via ')) {
        const destinations = headsign.split(' via ');
        stringsToTranslate.push(...destinations);
      } else if (headsign?.endsWith(' via')) {
        headsign = headsign.substring(0, headsign.indexOf(' via'));
        stringsToTranslate.push(headsign);
      } else {
        if (headsign) {
          stringsToTranslate.push(headsign);
        }
      }
    }
  });
  return stringsToTranslate;
};

export const createDepartureArray = (
  views,
  stops,
  isStation = false,
  t,
  fromStop = false,
  initTime,
) => {
  const defaultSettings = {
    hiddenRoutes: [],
    timeshift: 0,
    renamedDestinations: [],
  };
  const departures = [];
  const stringsToTranslate = [];
  const alerts = [];
  const closedStopViews: Array<IClosedStop> = [];

  views.forEach((view, i) => {
    Object.keys(view.columns).forEach(column => {
      const departureArray = [];
      stops.forEach(stop => {
        if (!stop) {
          return null;
        }
        const stopIndex = view.columns[column].stops
          .map(stop => stop.gtfsId)
          .indexOf(stop.gtfsId);
        let viewStop = view.columns[column].stops[stopIndex];
        viewStop = {
          ...viewStop,
          lat: stop.lat,
          lon: stop.lon,
        };
        if (!fromStop) {
          view.columns[column].stops[stopIndex] = viewStop;
        }
        const stopAlerts = [];
        if (!isStation) {
          stopAlerts.push(...stop.alerts);
        } else {
          stop.stops.forEach(s => {
            alerts.push(...s.alerts);
          });
        }
        if (
          stopIndex >= 0 &&
          stopAlerts.length === 1 &&
          stopAlerts[0].alertHeaderText === t('closedStop', { lng: 'fi' })
        ) {
          const closedStop: IClosedStop = {
            viewId: i + 1,
            column: column,
            gtfsId: stop.gtfsId,
            name: stop.name,
            code: stop.code,
            lat: stop.lat,
            lon: stop.lon,
            startTime: stopAlerts[0].effectiveStartDate,
            endTime: stopAlerts[0].effectiveEndDate,
          };
          closedStopViews.push(closedStop);
          if (
            stops.length > 1 ||
            (stops.length === 1 && view.layout >= 9 && view.layout < 12)
          ) {
            alerts.push(...stop.alerts);
          }
        } else {
          if (stopIndex >= 0) {
            const {
              hiddenRoutes,
              timeShift,
              showEndOfLine,
              showStopNumber,
              showVia,
            } = view.columns[column].stops[stopIndex].settings
              ? view.columns[column].stops[stopIndex].settings
              : defaultSettings;

            if (isStation) {
              stop.stops.forEach(s => {
                stringsToTranslate.push(
                  ...getTranslationStringsForStop(stop, hiddenRoutes),
                );
                alerts.push(...s.alerts);
                s.routes.forEach(r => alerts.push(...r.alerts));
              });
            } else {
              stringsToTranslate.push(
                ...getTranslationStringsForStop(stop, hiddenRoutes),
              );
              alerts.push(...stop.alerts);
              stop.routes.forEach(r => alerts.push(...r.alerts));
            }
            departureArray.push(
              ...filterDepartures(
                stop,
                hiddenRoutes,
                timeShift,
                showEndOfLine,
                showStopNumber,
                showVia,
              ),
            );
          }
        }
      });
      const colIndex = column === 'left' ? 0 : 1;
      departures[i] = departures[i] ? departures[i] : [[], []];
      departures[i][colIndex] = uniqBy(
        departureArray
          .filter(d => d)
          .sort(
            (stopTimeA, stopTimeB) =>
              stopTimeAbsoluteDepartureTime(stopTimeA) -
              stopTimeAbsoluteDepartureTime(stopTimeB),
          ),
        departure => departure.trip.gtfsId,
      );
    });
  });
  let arr = alerts;
  if (process.env.NODE_ENV === 'development' && dummyAlerts.inUse) {
    arr = arr.concat(getDummyAlerts(initTime));
  }
  return [stringsToTranslate, departures, arr, closedStopViews];
};

export const isInformationDisplay = cards => {
  return (
    cards.length === 1 &&
    cards[0].columns.left.stops.length &&
    cards[0].columns.left.stops.every(stop => stop.settings?.allRoutesHidden)
  );
};

export function getWeatherData(time, lat, lon) {
  if (!lat || !lon) {
    return null;
  }
  const remainder = 5 - (time.minute % 5);
  const endtime = time
    .set({ seconds: 0 })
    .set({ milliseconds: 0 })
    .setZone('utc')
    .plus({ minutes: remainder });

  const searchTime = endtime;

  return (
    retryFetch(
      `${WEATHER_URL}&latlon=${lat},${lon}&starttime=${searchTime}&endtime=${searchTime}`,
      {},
      2,
      200,
    )
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .then(res => res.text())
      .then(str => {
        const options = {
          ignoreAttributes: true,
          ignoreNameSpace: true,
        };
        return xmlParser.parse(str, options);
      })
      .then(json => {
        if (json.FeatureCollection?.member) {
          const data = json.FeatureCollection.member.map(
            elem => elem.BsWfsElement,
          );
          return data;
        }
        return null;
      })
      .catch(err => {
        throw new Error(`Error fetching weather data: ${err}`);
      })
  );
}

// Tries to fetch 1 + retryCount times until 200 is returned.
// Uses retryDelay (ms) between requests. url and options are normal fetch parameters
export const retryFetch = (URL, options = {}, retryCount, retryDelay) =>
  new Promise((resolve, reject) => {
    const retry = retriesLeft => {
      fetch(URL, options)
        .then(res => {
          if (res.ok) {
            resolve(res);
            // Don't retry if user is not logged in
          } else if (res.status === 401) {
            throw res.status;
          } else {
            // eslint-disable-next-line no-throw-literal
            throw `${URL}: ${res.statusText}`;
          }
        })
        .catch(async err => {
          if (retriesLeft > 0 && err !== 401) {
            await delay(retryDelay);
            retry(retriesLeft - 1);
          } else {
            reject(err);
          }
        });
    };
    retry(retryCount);
  });

export const checkDayNight = (iconId, timem, lat, lon) => {
  const dayNightIconIds = [1, 2, 21, 22, 23, 41, 42, 43, 61, 62, 71, 72, 73];
  const date = timem;
  const dateMillis = timem.ts;
  const sunCalcTimes = SunCalc.getTimes(date, lat, lon);
  const sunrise = sunCalcTimes.sunrise.getTime();
  const sunset = sunCalcTimes.sunset.getTime();
  if (
    (sunrise > dateMillis || sunset < dateMillis) &&
    dayNightIconIds.includes(iconId)
  ) {
    // Night icon = iconId + 100
    return iconId + 100;
  }
  return iconId;
};

export const capitalize = text => {
  if (text && text !== null) {
    const textArray = text.split(' ');
    const capitalized = textArray[0]
      .toLowerCase()
      .replace(/(^|[\s-])\S/g, function (match) {
        return match.toUpperCase();
      });
    textArray.splice(0, 1, capitalized);
    let retValue = textArray.join(' ');
    if (retValue.indexOf(' (m)') !== -1) {
      retValue = retValue.replace(' (m)', ' (M)');
    } else if (retValue.indexOf('(m)') !== -1) {
      retValue = retValue.replace('(m)', ' (M)');
    }
    return retValue;
  }
  return text;
};

export const getTrainStationData = (monitor, locationType) => {
  const retValue = [];
  const array = monitor.cards ? monitor.cards : monitor;
  array.forEach(card => {
    Object.keys(card.columns).forEach(column => {
      card.columns[column].stops?.forEach(stop => {
        if (
          stop.locationType === locationType &&
          stop.vehicleMode?.toLowerCase() === 'rail'
        ) {
          const isHsl = stop.gtfsId.startsWith('HSL:');
          const gtfsId =
            isHsl && stop.parentStation?.gtfsId
              ? stop.parentStation?.gtfsId
              : stop.gtfsId;

          retValue.push({
            gtfsId: gtfsId,
            shortCode: !isHsl
              ? gtfsId.substring(8)
              : trainStationMap?.find(i => i.gtfsId === gtfsId)?.shortCode ||
                null,
            source: isHsl ? 'HSL' : 'MATKA',
            hiddenRoutes: stop.settings?.hiddenRoutes || [],
          });
        }
      });
    });
  });
  return retValue;
};

export const isPlatformOrTrackVisible = monitor => {
  let showPlatformOrTrack = false;
  const array = monitor.cards ? monitor.cards : monitor;
  array.forEach(card => {
    Object.keys(card.columns).forEach(column => {
      card.columns[column].stops?.forEach(stop => {
        if (stop.settings && stop.settings.showStopNumber) {
          showPlatformOrTrack = true;
        }
      });
    });
  });
  return showPlatformOrTrack;
};

export const uuidValidateV5 = uuid => {
  return uuidValidate(uuid) && uuidVersion(uuid) === 5;
};

export const getContentHash = locationSearch => {
  const paramArray = locationSearch.substring(1).split('&');
  const hash = paramArray?.find(p => {
    return p.includes('cont=');
  });
  return decodeURIComponent(hash?.substring(5));
};
