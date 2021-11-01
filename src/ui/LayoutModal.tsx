import React, { ClassAttributes, FC, useState } from 'react';
import cx from 'classnames';
import { horizontalLayouts, verticalLayouts } from './Layouts';
import isEqual from 'lodash/isEqual';
import Modal from 'react-modal';
import { withTranslation, WithTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import { getColorByName } from '../util/getConfig';
import {
  defaultColorAlert,
  defaultColorFont,
  defaultFontNarrow,
  defaultFontNormal,
} from './DefaultStyles';
import Icon from './Icon';

Modal.setAppElement('#root');

interface Option {
  value: string;
  label: ClassAttributes<HTMLDivElement>;
}
interface Props {
  option: Option;
  onClose: (option) => void;
  isOpen: boolean;
  orientation: string;
}

const LayoutModal: FC<Props & WithTranslation> = ({
  orientation,
  isOpen,
  option,
  onClose,
  t,
}) => {
  const [selected, setSelected] = useState(option);
  const handleClose = () => {
    onClose(selected);
  };
  const onClick = option => {
    setSelected(option);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  }

  const verticalHeight = {
    ...modalStyle,
    content: {
      width: '640px',
    },
  };
  const layouts =
    orientation === 'horizontal' ? horizontalLayouts : verticalLayouts;

  const style = {
    '--primary-color': getColorByName('primary'),
    '--alert-color': getColorByName('alert') || defaultColorAlert,
    '--font-color': getColorByName('font') || defaultColorFont,
    fontFamily: defaultFontNormal,
    '--font-family-narrow': defaultFontNarrow,
  } as React.CSSProperties;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(null)}
      portalClassName="modal"
      style={orientation === 'vertical' ? verticalHeight : modalStyle }
    >
      <div className="layout-modal-content-container" style={style}>
        <div role="button" className="close" onClick={() => onClose(null)}>
          <Icon img={'close'} height={15} width={15} color={getColorByName('primary')} />
        </div>
        <h2 className="layout-modal-header">{t('layoutModalHeader')}</h2>
        <div className="layouts">
          {layouts.map(l => {
            return (
              <div className="row" key={uuid()}>
                <h3 className="row-header"> {l.label}</h3>
                <div className="options">
                  {l.options.map(option => {
                    return (
                      <div
                        className={cx(
                          'option',
                          orientation === 'vertical' ? 'vertical' : '',
                          isEqual(option.value, selected.value)
                            ? 'label-selected'
                            : '',
                        )}
                        onClick={() => onClick(option)}
                        key={uuid()}
                      >
                        {option.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="button-container">
          <button className="close-button" onClick={handleClose}>
            {t('save')}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default withTranslation('translations')(LayoutModal);
