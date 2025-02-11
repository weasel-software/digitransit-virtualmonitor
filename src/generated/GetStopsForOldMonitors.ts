/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LocationType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetStopsForOldMonitors
// ====================================================

export interface GetStopsForOldMonitors_stops {
  __typename: "Stop";
  /**
   * Name of the stop, e.g. Pasilan asema
   */
  name: string;
  /**
   * ÌD of the stop in format `FeedId:StopId`
   */
  gtfsId: string;
  /**
   * Identifies whether this stop represents a stop or station.
   */
  locationType: LocationType | null;
}

export interface GetStopsForOldMonitors {
  /**
   * Get all stops
   */
  stops: (GetStopsForOldMonitors_stops | null)[] | null;
}

export interface GetStopsForOldMonitorsVariables {
  ids: string[];
}
