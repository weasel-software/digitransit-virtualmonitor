import { gql } from '@apollo/client';

export const GET_STOP_DEPARTURES = gql`
  query GetDepartures($ids: [String!]!, $numberOfDepartures: Int!) {
    stops: stops(ids: $ids) {
      name
      code
      gtfsId
      patterns {
        headsign
        code
        headsign
        route {
          gtfsId
          shortName
        }
      }
      alerts {
        alertSeverityLevel
        alertHeaderText
        alertHeaderTextTranslations {
          text
          language
        }
        alertDescriptionTextTranslations {
          text
          language
        }
        effectiveEndDate
        effectiveStartDate
        stop {
          gtfsId
          code
        }
      }
      routes {
        alerts {
          alertSeverityLevel
          alertHeaderText
          alertHeaderTextTranslations {
            text
            language
          }
          alertDescriptionTextTranslations {
            text
            language
          }
          effectiveEndDate
          effectiveStartDate
          stop {
            gtfsId
            code
          }
        }
        longName
        id
        patterns {
          code
          headsign
          route {
            gtfsId
            shortName
          }
        }
      }
      stoptimesForPatterns(
        numberOfDepartures: $numberOfDepartures
        omitCanceled: false
      ) {
        pattern {
          code
          directionId
          headsign
          route {
            gtfsId
            shortName
          }
        }
        stoptimes {
          stop {
            gtfsId
            code
            platformCode
            parentStation {
              gtfsId
            }
          }
          realtime
          pickupType
          serviceDay
          scheduledArrival
          realtimeArrival
          arrivalDelay
          scheduledDeparture
          realtimeDeparture
          departureDelay
          realtimeState
          headsign
          trip {
            gtfsId
            route {
              shortName
            }
            stops {
              gtfsId
            }
          }
        }
      }
    }
  }
`;

export const GET_STATION_DEPARTURES = gql`
  query GetDeparturesForStations($ids: [String!]!, $numberOfDepartures: Int!) {
    stations: stations(ids: $ids) {
      name
      code
      gtfsId
      stops {
        patterns {
          headsign
          code
          headsign
          route {
            gtfsId
            shortName
          }
        }
        routes {
          alerts {
            alertSeverityLevel
            alertHeaderText
            alertHeaderTextTranslations {
              text
              language
            }
            alertDescriptionTextTranslations {
              text
              language
            }
            effectiveEndDate
            effectiveStartDate
            stop {
              gtfsId
              code
            }
          }
          longName
          id
          patterns {
            code
            headsign
            route {
              gtfsId
              shortName
            }
          }
        }
        gtfsId
        alerts {
          alertSeverityLevel
          alertHeaderText
          alertHeaderTextTranslations {
            text
            language
          }
          alertDescriptionTextTranslations {
            text
            language
          }
          effectiveEndDate
          effectiveStartDate
          stop {
            gtfsId
            code
          }
        }
      }
      stoptimesForPatterns(
        numberOfDepartures: $numberOfDepartures
        omitCanceled: false
      ) {
        pattern {
          code
          directionId
          headsign
          route {
            gtfsId
            shortName
          }
        }
        stoptimes {
          stop {
            gtfsId
            code
            platformCode
            parentStation {
              gtfsId
            }
          }
          realtime
          pickupType
          serviceDay
          scheduledArrival
          realtimeArrival
          arrivalDelay
          scheduledDeparture
          realtimeDeparture
          realtimeState
          departureDelay
          headsign
          trip {
            gtfsId
            route {
              gtfsId
              shortName
            }
            stops {
              gtfsId
            }
          }
        }
      }
    }
  }
`;
