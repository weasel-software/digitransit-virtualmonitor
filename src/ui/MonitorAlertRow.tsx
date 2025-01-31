import React, { FC, useEffect, useState } from 'react';
import cx from 'classnames';
import {
  getServiceAlertDescription,
  getServiceAlertHeader,
} from '../util/alertUtils';

interface IProps {
  alerts: any;
  languages: any;
  preview: boolean;
  alertOrientation: string;
}
const getAnimationWidth = orientation => {
  const alertElements = document.getElementsByClassName('single-alert');
  const elementArray = alertElements;
  let animationWidth = 0;
  for (let i = 0; i < elementArray.length; i++) {
    if (orientation === 'vertical') {
      animationWidth += elementArray[i].clientHeight + 10;
    } else {
      animationWidth += elementArray[i].clientWidth;
    }
  }
  return animationWidth;
};

const MonitorAlertRow: FC<IProps> = ({
  preview,
  alerts,
  languages,
  alertOrientation,
}) => {
  const [animationWidth, setAnimationWidth] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [update, setUpdate] = useState(false);

  const updateAnimation = () => {
    const width = getAnimationWidth(alertOrientation);
    const windowWidth = preview ? 640 : window.innerWidth;
    const windowHeight = preview ? 370 : window.innerWidth;
    setAnimationWidth(width);
    alertOrientation === 'horizontal'
      ? setSpeed((width / windowWidth) * 10) // 10 means that it should take 10 seconds for a word appearing from the right to reach the left side of the screen
      : setSpeed((width / (windowHeight / 6)) * 5);
    setUpdate(true);
  };
  // ONLY NEEDED FOR DEMO TO WORK ---
  useEffect(() => {
    updateAnimation();
    const to = setTimeout(() => setUpdate(false), 100);
    return () => clearTimeout(to);
  }, [alertOrientation]);
  // ---------------------------------
  useEffect(() => {
    updateAnimation();
    const to = setTimeout(() => setUpdate(false), 100);
    window.addEventListener('resize', () => {
      updateAnimation();
      setTimeout(() => setUpdate(false), 100);
    });
    return () => clearTimeout(to);
  }, []);

  const a = [];
  for (let i = 0; i < alerts.length; i++) {
    if (
      alerts[i].alertDescriptionTextTranslations ||
      alerts[i].alertHeaderTextTranslations
    ) {
      for (let j = 0; j < languages.length; j++) {
        a.push(
          <span key={`alert-${i + 1}-lang-${j + 1}`} className="single-alert">
            {getServiceAlertDescription(alerts[i], languages[j]) ||
              getServiceAlertHeader(alerts[i], languages[j])}
          </span>,
        );
      }
    } else {
      a.push(
        <span key={`alert-${i + 1}-lang-1`} className="single-alert">
          {getServiceAlertDescription(alerts[i], 'fi') ||
            getServiceAlertHeader(alerts[i], 'fi')}
        </span>,
      );
    }
    if (!(i === alerts.length - 1) && !(alertOrientation === 'horizontal')) {
      a.push(
        <div
          key={`alert-${i + 1}-separator}`}
          className="alert-separator"
        ></div>,
      );
    }
  }
  const style = {
    '--animationWidth': `${Number(-1 * animationWidth).toFixed(0)}px`,
    '--speed': `${Number(speed).toFixed(0)}s`,
  } as React.CSSProperties;
  return (
    <div style={style} className={cx('grid-row', 'alert', alertOrientation)}>
      <div className={cx('grid-cols', 'alert-row')}>
        <div
          className={cx('alert-text', {
            animated: !update,
          })}
          onAnimationIteration={() => {
            updateAnimation();
            setTimeout(() => setUpdate(false), 100);
          }}
        >
          {a}
        </div>
      </div>
    </div>
  );
};

export default MonitorAlertRow;
