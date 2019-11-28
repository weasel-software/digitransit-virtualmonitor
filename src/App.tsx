import * as React from 'react';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Link, Route, RouteComponentProps, Switch } from 'react-router-dom';

import 'src/App.css';
import Logo from 'src/ui/Logo';
import StopSelectorSwitch from 'src/ui/StopSelectorSwitch';
import Titlebar from 'src/ui/Titlebar';

import ConfigurationDisplay from 'src/ui/ConfigurationDisplay';
import ConfigurationList from 'src/ui/ConfigurationList';
import DisplayEditor from 'src/ui/DisplayEditor';
import DisplayUrlCompression from 'src/ui/DisplayUrlCompression';
import QuickDisplay from 'src/ui/QuickDisplay';
import TitlebarTime from 'src/ui/TitlebarTime';
import StopTimesView from 'src/ui/Views/StopTimesView';
import HelpPage from 'src/ui/HelpPage';
import i18n from 'src/i18n';

interface IMonitorConfig {
  feedId?:  string,
  uri?: string,
      // Texts for Help page
  exampleStopId?: string,
  exampleStopIds?: string,
  exampleReittiopasUrl?: string,
  exampleReittiopasStopId?: string,
  exampleStopName?: string,
  lang?: string
}

export interface IConfigurationProps{
  monitorConfig?: IMonitorConfig,
}
interface ICompressedDisplayRouteParams {
  version: string,
  packedDisplay: string
};

interface IConfigurationDisplayRouteParams {
  configuration: string,
  displayName: string,
};

interface IStopRouteParams {
  lang: string,
  stopId: string,
  displayedRoutes?: string,
};

export type combinedConfigurationAndInjected = IConfigurationProps & InjectedTranslateProps

class App extends React.Component<combinedConfigurationAndInjected> {
  constructor(props: combinedConfigurationAndInjected) {
    super(props);
  }
  public render() {
    const monitorConfig = this.props.monitorConfig;

    let helpPageUrlParamText: string = '';
    let helpPageurlMultipleStopsText: string = '';
    let exampleReittiopasUrl: string = '';
    let exampleReittiopasStopId: string = '';
    let examplePageStopName: string = '';
    let feedId: string = '';

    if(monitorConfig) {
     // Configurable strings for help page..
      helpPageUrlParamText = monitorConfig.exampleStopId ? monitorConfig.exampleStopId : '';
      helpPageurlMultipleStopsText = monitorConfig.exampleStopIds ? monitorConfig.exampleStopIds : '';
      exampleReittiopasUrl = monitorConfig.exampleReittiopasUrl ? monitorConfig.exampleReittiopasUrl : '';
      exampleReittiopasStopId = monitorConfig.exampleReittiopasStopId ? monitorConfig.exampleReittiopasStopId : '';
      examplePageStopName = monitorConfig.exampleStopName ? monitorConfig.exampleStopName : '';
      feedId = monitorConfig.feedId ? monitorConfig.feedId : ''
    }
    
    return (
      <div
        className={'App'}
      >
        <Switch>
          <Route
            path={'/quickDisplay/:version?/:packedDisplay?'}
            component={QuickDisplay}
          />
          <Route
           path={'/:lang?/help/'}
           component={({ match: { params: { lang }} }: RouteComponentProps<IMonitorConfig>) => (
            <HelpPage exampleStopId={helpPageUrlParamText}
                      exampleStopIds={helpPageurlMultipleStopsText}
                      exampleReittiopasUrl={exampleReittiopasUrl}
                      exampleReittiopasStopId={exampleReittiopasStopId}
                      exampleStopName={examplePageStopName}
                      lang={lang}
                      feedId={feedId}
             />
            )}         
          />
          <Route
            path={'/urld/:version/:packedDisplay'}
            component={({ match: { params: { version, packedDisplay }} }: RouteComponentProps<ICompressedDisplayRouteParams>) => (
              <DisplayUrlCompression
                version={decodeURIComponent(version)}
                packedString={decodeURIComponent(packedDisplay)}
              />
            )}
          />
          <Route
            path={'/configuration/:configuration/display/:display'}
            component={({ match: { params: { configuration, displayName }}}: RouteComponentProps<IConfigurationDisplayRouteParams>) => (
              <ConfigurationDisplay
                configurationName={configuration}
                displayName={displayName}
              />
            )}
          />
          <Route
            path={'/:lang?/stop/:stopId/:displayedRoutes?'}
            component={({ match: { params: { lang, stopId, displayedRoutes }} }: RouteComponentProps<IStopRouteParams>) => (
              <StopTimesView
                lang={lang}
                stopIds={stopId.split(",")}
                displayedRoutes={displayedRoutes ? Number(displayedRoutes) : undefined}
                monitorConfig={monitorConfig}
              />
            )}
          />
          <Route
            path={'/configs/:configName?'}
            component={ConfigurationList}
          />
          <Route
            path={'/displayEditor/'}
            component={DisplayEditor}
          />
          <Route>
            <div id={'stop-search'}>
              <Titlebar>
                <Logo monitorConfig={monitorConfig} />
                <div id={"title-text"}>
                  {this.props.t('titlebarTitle')}
                </div>
                <TitlebarTime />
              </Titlebar>
              <Link to={'/quickDisplay'}>
                {this.props.t('quickDisplayCreate')}
              </Link>
              {/* <Link to={'/configs/1'}>
                Configs playground
              </Link> */}
              <StopSelectorSwitch />
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
};

export default translate('translations')(App);
