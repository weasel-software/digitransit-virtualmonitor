import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import { GET_STOP } from '../queries/stopStationQueries';
import { IColumn } from '../util/Interfaces';
import { isInformationDisplay } from '../util/monitorUtils';
import Button from './Button';
import Icon from './Icon';
import PreviewModal from './PreviewModal';
import monitorAPI from '../api';

interface IProps {
  view: any;
}

/*
columns:
left: {inUse: true, title: "Vasen otsikko", stops: Array(1)}
right: {inUse: false, title: "Oikea otsikko", stops: Array(0)}
__proto__: Object
duration: 5
id: 1
layout: 1
title: "Näkymän nimi"
 */

const UserMonitorCard: React.FC<IProps & WithTranslation> = props => {
  const { cards, name, contenthash, languages, url } = props.view;
  const [redirect, setRedirect] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const layout = cards[0].layout;
  const titles = cards.map(c => {
    return c.title.fi;
  });
  const layouts = cards.map(c => {
    return c.layout;
  });
  const goToEdit = () => {
    setRedirect(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onDelete = () => {
    monitorAPI.deleteStatic(contenthash, url).then(res => {
      setDelete(true);
    });
  };

  if (isDelete) {
    return (
      <Redirect
        to={{
          pathname: '/',
          search: `?pocLogin`,
        }}
      />
    );
  }

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: '/createStaticView',
          search: `?name=${name}&url=${url}&cont=${contenthash}`,
        }}
      />
    );
  }
  const v = {
    cards: cards,
    languages: languages,
    isInformationDisplay: isInformationDisplay(cards),
  };

  const crds = cards.map((c, i) => {
    const cols = c.columns;
    const multipleCols = cols.right.inUse;
    const colStops = multipleCols
      ? cols.left.stops.concat(cols.right.stops)
      : cols.left.stops;
    const stops = (
      <ul key={`card#${i}`}>
        {colStops.flat().map((stop, j) => {
          const stopText = stop.name
            .concat(' (')
            .concat(stop.gtfsId)
            .concat(')');
          return <li key={`stop#${j}`}>{stopText}</li>;
        })}
      </ul>
    );
    return (
      <>
        <div className="card-container">
          <Icon img={'layout'.concat(layouts[i])} />
          <div className="data">
            <div className="card-title">
              {' '}
              {layouts[i] < 9 || layouts[i] > 11
                ? titles[i]
                : cols.left.title.fi
                    .concat(' / ')
                    .concat(cols.right.title.fi)}{' '}
            </div>
            <div className="stop-list">{stops}</div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className={'card'}>
      {isOpen && (
        <PreviewModal
          languages={languages}
          view={v}
          isOpen={isOpen}
          onClose={onClose}
          isLandscape={layout < 11}
        />
      )}
      <div className="main-container">
        <span className="layout-img">
          <Icon
            img={layouts[0] < 11 ? 'rectangle-selected' : 'vertical-selected'}
            height={32}
            width={32}
          />
        </span>
        <span className="monitor-name">{name}</span>
        <div className="control-buttons">
          <button className="button" onClick={() => setOpen(true)}>
            Esikatselu
          </button>
          <button className="edit-button" onClick={goToEdit}>
            Muokkaa
          </button>
          <div className="delete-icon" onClick={onDelete}>
            <Icon img="delete" color={'#007AC9'} />
          </div>
        </div>
      </div>
      <div className="cards">
        {Array.isArray(crds) &&
          crds.map((c, x) => {
            return (
              <div key={`c#${x}`} className="card-item">
                {c}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default withTranslation('translations')(UserMonitorCard);
