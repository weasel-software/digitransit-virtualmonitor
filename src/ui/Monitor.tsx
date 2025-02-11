import React, { FC, useState, useEffect } from 'react';
import cx from 'classnames';
import { IView, IClosedStop } from '../util/Interfaces';
import MonitorRowContainer from './MonitorRowContainer';
import { getLayout } from '../util/getLayout';
import { IMonitorConfig } from '../App';
import { IDeparture } from './MonitorRow';
import { ITranslation } from './TranslationContainer';
import MonitorOverlay from './MonitorOverlay';
import MonitorTitlebar from './MonitorTitleBar';
import { getColorByName } from '../util/getConfig';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

interface IProps {
  alertState: number;
  readonly view: IView;
  readonly departures: Array<Array<IDeparture>>;
  currentLang: string;
  readonly translatedStrings: Array<ITranslation>;
  readonly config: IMonitorConfig;
  readonly isPreview: boolean;
  alertComponent: any;
  alertRowSpan: number;
  closedStopViews: Array<IClosedStop>;
  staticContentHash?: string;
  staticUrl?: string;
  staticViewTitle?: string;
}
let to;

const Monitor: FC<IProps> = ({
  view,
  departures,
  translatedStrings,
  currentLang,
  config,
  isPreview,
  alertState,
  alertComponent,
  alertRowSpan,
  closedStopViews,
  staticContentHash,
  staticUrl,
  staticViewTitle,
}) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );
  const { isMultiDisplay } = getLayout(view.layout);
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', () => {
      setWindowDimensions(getWindowDimensions());
    });
  }, []);

  const windowHeight = windowDimensions.height;
  const windowWidth = windowDimensions.width;
  const style = {
    '--height': `${Number(windowHeight).toFixed(0)}px`,
    '--width': `${Number(windowWidth).toFixed(0)}px`,
    '--monitor-background-color':
      getColorByName('monitorBackground') || getColorByName('primary'),
  } as React.CSSProperties;

  const isLandscapeByLayout = view.layout <= 11;

  return (
    <div
      style={style}
      className={cx('main-content-container', {
        preview: isPreview,
        portrait: !isLandscapeByLayout,
      })}
      onMouseMove={() => {
        setShowOverlay(true);
        clearTimeout(to);
        to = setTimeout(() => setShowOverlay(false), 3000);
      }}
    >
      <MonitorOverlay
        show={showOverlay}
        isPreview={isPreview}
        staticUrl={staticUrl}
        staticViewTitle={staticViewTitle}
        staticContentHash={staticContentHash}
      />
      <MonitorTitlebar
        config={config}
        isMultiDisplay={isMultiDisplay}
        isLandscape={isLandscapeByLayout}
        preview={isPreview}
        view={view}
        currentLang={currentLang}
      />
      <MonitorRowContainer
        viewId={view['id']}
        departuresLeft={departures[0].filter(x => x != null)}
        departuresRight={departures[1].filter(x => x != null)}
        rightStops={view.columns.right.stops}
        leftStops={view.columns.left.stops}
        currentLang={currentLang}
        translatedStrings={translatedStrings}
        layout={view.layout}
        isLandscape={isLandscapeByLayout}
        alertState={alertState}
        alertComponent={alertComponent}
        alertRowSpan={alertRowSpan}
        showMinutes={Number(config.showMinutes)}
        closedStopViews={closedStopViews}
        preview={isPreview}
      />
    </div>
  );
};

export default Monitor;
