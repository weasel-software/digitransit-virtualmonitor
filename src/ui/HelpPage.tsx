import {useEffect, useState} from "react";
import { WithTranslation, withTranslation } from "react-i18next";
//import { some } from 'lodash';
import * as React from 'react';
import StopViewTitleEditor from "./StopViewTitleEditor";
import StopListContainer from './StopListContainer';
import DTAutosuggest from '@digitransit-component/digitransit-component-autosuggest';
import { gql, useLazyQuery } from '@apollo/client';
import getSearchContext from "./searchContext";
import LayoutAndTimeContainer from './LayoutAndTimeContainer'

const getGTFSId = ( id ) => {
  if (id && typeof id.indexOf === 'function' && id.indexOf('GTFS:') === 0) {
    if (id.indexOf('#') === -1) {
      return id.substring(5);
    }
    return id.substring(5, id.indexOf('#'));
  }
  return undefined;
};

const GET_STOP = gql`
  query stopQuery($ids: [String]) {
    stop: stops(ids: $ids) {
      id
      name
      code
      desc
      gtfsId
      platformCode
    }
  }
`;
const GET_STATION = gql`
  query stationQuery($ids: [String]) {
    station: stations(ids: $ids) {
      id
      name
      code
      desc
      gtfsId
      platformCode
      stops {
        desc
      }
    }
  }
`;
interface IHelpPageProps {
  urlParamUsageText?: string,
  urlMultipleStopsText?: string,
  urlParamFindText?: string,
  urlParamFindAltText?: string,
  client: any,
}


const HelpPage :React.FC<IHelpPageProps & WithTranslation> = (props) =>  {
  if(!props) {
    return (<p> ERROR: OHJEITA EI LÖYTYNYT</p>)
  }

  const [stops, setStops] =  useState([]);
  const [
    getStop,
    stopState
  ] = useLazyQuery(GET_STOP);
  
  const [
    getStation,
    stationState
  ] = useLazyQuery(GET_STATION);

  const lang = 'fi'; // en, fi or sv

  const onSelect = (selected) => {
    const properties = selected.properties;
    switch (properties.layer) {
      case 'stop':
        getStop({ variables: {ids: getGTFSId(properties.id)}})
        break;
      case 'station':
        getStation({ variables: {ids: getGTFSId(properties.id)}})
        break;
      default:
        console.log('unknown', selected);
        break;
    }
    
  };

  const onClear = () => {
    // Called  when user clicks the clear search string button.
    return null;
  };

  useEffect(() => {
    if(stopState.data?.stop) {
      setStops(stops.concat(stopState.data.stop.filter(stop => stop && !stops.some(el => el.id === stop.id))))
    }
  }, [stopState.data]);

  useEffect(() => {
    if(stationState.data?.station) {
      setStops(stops.concat(stationState.data.station.filter(s => s && !stops.some(el => el.id === s.id)).map(station => {
        return {
          ...station,
          code: props.t('station'),
          desc: station.stops[0].desc,
        }
      })))
    }
  }, [stationState.data])

  const onDelete = (stop: string) => {
    setStops(stops.filter(s => s.gtfsId !== stop))
  }
  const context = getSearchContext()
  const placeholder = 'Pysäkin nimi tai numero' // TODO: -> props.t('autosuggestPlaceHolder'); When Autosuggest is in correct component
  const targets = [ 'Stops']; // Defines what you are searching. all available options are Locations, Stops, Routes, BikeRentalStations, FutureRoutes, MapPosition and CurrentPosition. Leave empty to search all targets.
  const sources = [ 'Datasource'] // Defines where you are searching. all available are: Favourite, History (previously searched searches) and Datasource. Leave empty to use all sources.
  return (
    <>
      <div>
          <StopViewTitleEditor/>
          <h1>Virtuaalimonitorin käyttöopas</h1>
          <h2>Virtuaalimonitorin käyttö selainparametrien avulla </h2>
          <p>
            {props.urlParamUsageText}
          </p>
          <p>
            {props.urlMultipleStopsText}
          </p>
          <h2> Oikean pysäkki-id:n löytäminen</h2>
          <p> {props.urlParamFindText}</p>
          <p> {props.urlParamFindAltText} </p>
      </div>
      <DTAutosuggest
          appElement={"root"} // Required. Root element's id. Needed for react-modal component.
            searchContext={context}
          icon="search"
          id="search"
          placeholder={placeholder}
          value=""
          onSelect={onSelect}
          onClear={onClear}
          autoFocus={false}
          lang={lang}
          sources={sources}
          targets={targets}
      />
      <StopListContainer stops={stops} onDelete={onDelete}/>
      <LayoutAndTimeContainer />
    </>
  )
}
export default withTranslation('translations')(HelpPage);
