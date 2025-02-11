/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AlertSeverityLevelType, PickupDropoffType, RealtimeState } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetDeparturesForStations
// ====================================================

export interface GetDeparturesForStations_stations_stops_patterns {
  __typename: "Pattern";
  /**
   * Vehicle headsign used by trips of this pattern
   */
  headsign: string | null;
}

export interface GetDeparturesForStations_stations_stops_routes_alerts_alertHeaderTextTranslations {
  __typename: "TranslatedString";
  text: string | null;
  /**
   * Two-letter language code (ISO 639-1)
   */
  language: string | null;
}

export interface GetDeparturesForStations_stations_stops_routes_alerts_alertDescriptionTextTranslations {
  __typename: "TranslatedString";
  text: string | null;
  /**
   * Two-letter language code (ISO 639-1)
   */
  language: string | null;
}

export interface GetDeparturesForStations_stations_stops_routes_alerts_stop {
  __typename: "Stop";
  /**
   * ÌD of the stop in format `FeedId:StopId`
   */
  gtfsId: string;
  /**
   * Stop code which is visible at the stop
   */
  code: string | null;
}

export interface GetDeparturesForStations_stations_stops_routes_alerts {
  __typename: "Alert";
  /**
   * Alert severity level
   */
  alertSeverityLevel: AlertSeverityLevelType | null;
  /**
   * Header of the alert, if available
   */
  alertHeaderText: string | null;
  /**
   * Header of the alert in all different available languages
   */
  alertHeaderTextTranslations: GetDeparturesForStations_stations_stops_routes_alerts_alertHeaderTextTranslations[];
  /**
   * Long descriptions of the alert in all different available languages
   */
  alertDescriptionTextTranslations: GetDeparturesForStations_stations_stops_routes_alerts_alertDescriptionTextTranslations[];
  /**
   * Time when this alert is not in effect anymore. Format: Unix timestamp in seconds
   */
  effectiveEndDate: any | null;
  /**
   * Time when this alert comes into effect. Format: Unix timestamp in seconds
   */
  effectiveStartDate: any | null;
  /**
   * Stop affected by the disruption
   */
  stop: GetDeparturesForStations_stations_stops_routes_alerts_stop | null;
}

export interface GetDeparturesForStations_stations_stops_routes {
  __typename: "Route";
  /**
   * List of alerts which have an effect on the route
   */
  alerts: (GetDeparturesForStations_stations_stops_routes_alerts | null)[] | null;
  /**
   * Long name of the route, e.g. Helsinki-Leppävaara
   */
  longName: string | null;
  /**
   * Global object ID provided by Relay. This value can be used to refetch this object using **node** query.
   */
  id: string;
}

export interface GetDeparturesForStations_stations_stops_alerts_alertHeaderTextTranslations {
  __typename: "TranslatedString";
  text: string | null;
  /**
   * Two-letter language code (ISO 639-1)
   */
  language: string | null;
}

export interface GetDeparturesForStations_stations_stops_alerts_alertDescriptionTextTranslations {
  __typename: "TranslatedString";
  text: string | null;
  /**
   * Two-letter language code (ISO 639-1)
   */
  language: string | null;
}

export interface GetDeparturesForStations_stations_stops_alerts_stop {
  __typename: "Stop";
  /**
   * ÌD of the stop in format `FeedId:StopId`
   */
  gtfsId: string;
  /**
   * Stop code which is visible at the stop
   */
  code: string | null;
}

export interface GetDeparturesForStations_stations_stops_alerts {
  __typename: "Alert";
  /**
   * Alert severity level
   */
  alertSeverityLevel: AlertSeverityLevelType | null;
  /**
   * Header of the alert, if available
   */
  alertHeaderText: string | null;
  /**
   * Header of the alert in all different available languages
   */
  alertHeaderTextTranslations: GetDeparturesForStations_stations_stops_alerts_alertHeaderTextTranslations[];
  /**
   * Long descriptions of the alert in all different available languages
   */
  alertDescriptionTextTranslations: GetDeparturesForStations_stations_stops_alerts_alertDescriptionTextTranslations[];
  /**
   * Time when this alert is not in effect anymore. Format: Unix timestamp in seconds
   */
  effectiveEndDate: any | null;
  /**
   * Time when this alert comes into effect. Format: Unix timestamp in seconds
   */
  effectiveStartDate: any | null;
  /**
   * Stop affected by the disruption
   */
  stop: GetDeparturesForStations_stations_stops_alerts_stop | null;
}

export interface GetDeparturesForStations_stations_stops {
  __typename: "Stop";
  /**
   * Patterns which pass through this stop
   */
  patterns: (GetDeparturesForStations_stations_stops_patterns | null)[] | null;
  /**
   * Routes which pass through this stop
   */
  routes: GetDeparturesForStations_stations_stops_routes[] | null;
  /**
   * ÌD of the stop in format `FeedId:StopId`
   */
  gtfsId: string;
  /**
   * List of alerts which have an effect on this stop
   */
  alerts: (GetDeparturesForStations_stations_stops_alerts | null)[] | null;
}

export interface GetDeparturesForStations_stations_stoptimesForPatterns_pattern_route {
  __typename: "Route";
  /**
   * ID of the route in format `FeedId:RouteId`
   */
  gtfsId: string;
  /**
   * Short name of the route, usually a line number, e.g. 550
   */
  shortName: string | null;
}

export interface GetDeparturesForStations_stations_stoptimesForPatterns_pattern {
  __typename: "Pattern";
  /**
   * ID of the pattern
   */
  code: string;
  /**
   * Direction of the pattern. Possible values: 0, 1 or -1.  
   *  -1 indicates that the direction is irrelevant, i.e. the route has patterns only in one direction.
   */
  directionId: number | null;
  /**
   * Vehicle headsign used by trips of this pattern
   */
  headsign: string | null;
  /**
   * The route this pattern runs on
   */
  route: GetDeparturesForStations_stations_stoptimesForPatterns_pattern_route;
}

export interface GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes_stop_parentStation {
  __typename: "Stop";
  /**
   * ÌD of the stop in format `FeedId:StopId`
   */
  gtfsId: string;
}

export interface GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes_stop {
  __typename: "Stop";
  /**
   * ÌD of the stop in format `FeedId:StopId`
   */
  gtfsId: string;
  /**
   * Stop code which is visible at the stop
   */
  code: string | null;
  /**
   * Identifier of the platform, usually a number. This value is only present for stops that are part of a station
   */
  platformCode: string | null;
  /**
   * The station which this stop is part of (or null if this stop is not part of a station)
   */
  parentStation: GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes_stop_parentStation | null;
}

export interface GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes_trip_route {
  __typename: "Route";
  /**
   * ID of the route in format `FeedId:RouteId`
   */
  gtfsId: string;
  /**
   * Short name of the route, usually a line number, e.g. 550
   */
  shortName: string | null;
}

export interface GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes_trip {
  __typename: "Trip";
  /**
   * Headsign of the vehicle when running on this trip
   */
  tripHeadsign: string | null;
  /**
   * ID of the trip in format `FeedId:TripId`
   */
  gtfsId: string;
  /**
   * The route the trip is running on
   */
  route: GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes_trip_route;
}

export interface GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes {
  __typename: "Stoptime";
  /**
   * The stop where this arrival/departure happens
   */
  stop: GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes_stop | null;
  /**
   * true, if this stoptime has real-time data available
   */
  realtime: boolean | null;
  /**
   * Whether the vehicle can be boarded at this stop. This field can also be used
   * to indicate if boarding is possible only with special arrangements.
   */
  pickupType: PickupDropoffType | null;
  /**
   * Departure date of the trip. Format: Unix timestamp (local time) in seconds.
   */
  serviceDay: any | null;
  /**
   * Scheduled departure time. Format: seconds since midnight of the departure date
   */
  scheduledDeparture: number | null;
  /**
   * Realtime prediction of departure time. Format: seconds since midnight of the departure date
   */
  realtimeDeparture: number | null;
  /**
   * State of real-time data
   */
  realtimeState: RealtimeState | null;
  /**
   * Vehicle headsign of the trip on this stop. Trip headsigns can change during
   * the trip (e.g. on routes which run on loops), so this value should be used
   * instead of `tripHeadsign` to display the headsign relevant to the user. 
   */
  headsign: string | null;
  /**
   * Trip which this stoptime is for
   */
  trip: GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes_trip | null;
}

export interface GetDeparturesForStations_stations_stoptimesForPatterns {
  __typename: "StoptimesInPattern";
  pattern: GetDeparturesForStations_stations_stoptimesForPatterns_pattern | null;
  stoptimes: (GetDeparturesForStations_stations_stoptimesForPatterns_stoptimes | null)[] | null;
}

export interface GetDeparturesForStations_stations {
  __typename: "Stop";
  /**
   * Name of the stop, e.g. Pasilan asema
   */
  name: string;
  /**
   * Stop code which is visible at the stop
   */
  code: string | null;
  /**
   * Latitude of the stop (WGS 84)
   */
  lat: number | null;
  /**
   * Longitude of the stop (WGS 84)
   */
  lon: number | null;
  /**
   * ÌD of the stop in format `FeedId:StopId`
   */
  gtfsId: string;
  /**
   * Returns all stops that are children of this station (Only applicable for stations)
   */
  stops: (GetDeparturesForStations_stations_stops | null)[] | null;
  /**
   * Returns list of stoptimes (arrivals and departures) at this stop, grouped by patterns
   */
  stoptimesForPatterns: (GetDeparturesForStations_stations_stoptimesForPatterns | null)[] | null;
}

export interface GetDeparturesForStations {
  /**
   * Get all stations
   */
  stations: (GetDeparturesForStations_stations | null)[] | null;
}

export interface GetDeparturesForStationsVariables {
  ids: string[];
  numberOfDepartures: number;
}
