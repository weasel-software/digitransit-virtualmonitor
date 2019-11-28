import * as React from 'react';
import { render } from 'react-dom';
import { InjectedTranslateProps, translate, I18n } from 'react-i18next';
import i18n from 'src/i18n';
import { lang } from 'moment';

interface IHelpPageProps {
  exampleStopId?: string,
  exampleStopIds?: string,
  exampleReittiopasUrl?: string,
  exampleReittiopasStopId?: string,
  exampleStopName?: string,
  lang?: string,
  feedId?: string,
  tampereHelp?: boolean,
}
const DefaultUrlParamTexts  = ({t, exampleReittiopasUrl, exampleReittiopasStopId}: IHelpPageProps & InjectedTranslateProps) => (
  <div>
    <p> {t('helpPageUrlParamFindText')}</p>
    <p> {t('helpPageUrlParamFindAltText', {exampleReittiopasUrl, exampleReittiopasStopId})}</p>
  </div>
)
const TampereUrlParameters = ({t}: InjectedTranslateProps) => (
  <div>
    <p>{t('tampereHelp')}</p>
  </div>
)
const HelpPageContent = ({exampleStopId, exampleStopName, exampleStopIds, exampleReittiopasUrl , exampleReittiopasStopId, tampereHelp, t}: IHelpPageProps & InjectedTranslateProps ) => (
  <div>
    <h1>{t('helpPageHeader')}</h1>
      <h2>{t('helpPageUrlUsageHeader')} </h2>
        <p>
          {t('helpPageUrlParamText', {exampleStopId, exampleStopName})}
        </p>
        <p>
        {t('helpPageurlMultipleStopsText', {exampleStopIds})}
      </p>
    <h2> {t('helpPageFindStopIdHeader')}</h2>
      {tampereHelp? <TampereUrlParameters t={t} /> : <DefaultUrlParamTexts t={t} exampleReittiopasUrl={exampleReittiopasUrl} exampleReittiopasStopId={exampleReittiopasStopId} /> }
</div>
)
const HelpPageTranslated = translate('translations')(HelpPageContent);
class HelpPage extends React.Component<IHelpPageProps> {
public render() {
  // Todo: Information about changing language with url parameters!
  if(!this.props) {
    return (<p> {i18n.t('helpPageError')}</p>)
  }
  if(this.props.lang) {
    i18n.changeLanguage(this.props.lang)
  }
  const exampleStopId = (this.props as IHelpPageProps).exampleStopId
  const exampleStopIds = (this.props as IHelpPageProps).exampleStopIds
  const exampleStopName = (this.props as IHelpPageProps).exampleStopName
  const exampleReittiopasUrl = (this.props as IHelpPageProps).exampleReittiopasUrl
  const exampleReittiopasStopId = (this.props as IHelpPageProps).exampleReittiopasStopId
  let tampereHelp = false
  if ((this.props.feedId === 'tampere')) {
    tampereHelp = true
  }
  return (
    <HelpPageTranslated exampleStopId={exampleStopId} exampleStopIds={exampleStopIds} exampleStopName = {exampleStopName}
          exampleReittiopasUrl= {exampleReittiopasUrl} exampleReittiopasStopId = {exampleReittiopasStopId}
          tampereHelp={tampereHelp}
    />
  )
 }
}
export default translate('translations')(HelpPage);
