import React, { FC } from 'react';
import Modal from 'react-modal';
import { IMonitor, ISettings, ITitle } from '../util/Interfaces';
import CarouselDataContainer from './CarouselDataContainer';
import Icon from './Icon';
import cx from 'classnames';
import InformationDisplayContainer from './InformationDisplayContainer';

Modal.setAppElement('#root');
interface IStop {
  code: string;
  desc: string;
  gtfsId: string;
  locationType: string;
  name: string;
  settings: ISettings;
}
interface ISides {
  stops: Array<IStop>;
  title: ITitle;
}
interface IColumn {
  left: ISides;
  right: ISides;
}
interface ICard {
  title: ITitle;
  layout: number;
  duration: number;
  columns: IColumn;
  showStopCode: boolean;
}
interface Props {
  view: IMonitor;
  languages: Array<string>;
  isOpen: boolean;
  onClose: (boolean) => void;
  isLandscape: boolean;
}
const PreviewModal: FC<Props> = (props: Props) => {
  const currentMillis = new Date().getTime();
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={() => props.onClose(false)}
        portalClassName={cx('preview', !props.isLandscape ? 'portrait' : '')}
      >
        <div className="title-and-close">
          <div className="title">Esikatselu</div>
          <div
            role="button"
            className="close"
            onClick={() => props.onClose(false)}
          >
            <Icon img={'close'} height={15} width={15} color={'#FFFFFF'} />{' '}
          </div>
        </div>
        <div className="carouselContainer">
          {props.view.isInformationDisplay ? (
            <InformationDisplayContainer preview={true} monitor={props.view}/>
          ) : (
            <CarouselDataContainer
            languages={props.languages}
            views={props.view.cards}
            preview
              />
          )}
          
        </div>
      </Modal>
    </>
  );
};

export default PreviewModal;
