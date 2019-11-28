import * as i18n from 'i18next';

i18n
  .init({
    debug: true,
    defaultNS: 'translations',
    fallbackLng: 'fi',

    interpolation: {
      escapeValue: false,
    },

    lng: 'fi',

    ns: ['translations'],

    react: {
      nsMode: 'default',
      wait: false,
    },

    resources: {
      en: {
        translations: {
          arriveTerminal: 'Arrives / Terminus',
          departureTime: 'Time',
          destination: 'Destination',
          helpPageHeader: 'Help page for Virtual monitor',
          helpPageUrlUsageHeader: 'Usage with url parameters',
          helpPageFindStopIdHeader: 'How to find right stop id',
          lineId: 'Line',
          viewErrorUnknownView: 'Unknown view with title \'{{viewTitle}}\' of type {{viewType}}',
          stop: 'Stop',
        },
      },
      fi: {
        translations: {
          arriveTerminal: 'Saapuu / Päätepysäkki',
          canceled: 'Peruttu',
          configuration: 'Konfiguraatio',
          departureTime: 'Lähtöaika',
          destination: 'Määränpää',
          display: 'Näyttö',
          displayEditorDefinePosition: 'Määritä sijainti',
          displayEditorStaticLink: 'Staattinen linkki',
          displayEditorNewView: 'Lisää uusi pysäkkinäkymä karuselliin',
          helpPageError: 'ERROR: OHJEITA EI LÖYTYNYT',
          helpPageHeader: 'Virtuaalimonitorin käyttöopas',
          helpPageUrlUsageHeader: 'Virtuaalimonitorin käyttö selainparametrien avulla',
          helpPageFindStopIdHeader: 'Oikean pysäkki-id:n löytäminen',
          helpPageUrlParamText: 'Pysäkkinäytön käyttö selaimen osoiteriviltä tapahtuu seuraavasti: kirjoita osoitteen perään /stop/pysäkit/rivimäärä. Esimerkiksi /stop/{{exampleStopId}}/10 Näyttää 10 riviä pysäkiltä {{exampleStopName}}',
          helpPageurlMultipleStopsText: 'Usean pysäkin näytön saat yksinkertaisesti lisäämällä pysäkkejä pilkulla erotettuna, esimerkiksi /stop/{{exampleStopIds}}.',
          helpPageUrlParamFindText: 'Löydät oikean pysäkki-id:n helposti esimerkiksi reittioppaasta: Siirry halutun pysäkin pysäkkinäkymään, ja katso urlin lopusta pysäkki-id.', 
          helpPageUrlParamFindAltText: 'Esimerkiksi {{exampleReittiopasUrl}} nähdään, että pysäkki-id on {{exampleReittiopasStopId}}. Huomaathan että %3A on HTML koodia, ja se tarkoittaa : merkkiä. Korvaa %3A : merkillä!',
          latitude: 'Latitude',
          lineId: 'Linja',
          loading: 'Ladataan…',
          loadingInfo: 'Ladataan…',
          longitude: 'Longitude',
          noStopsDefined: 'Ei pysäkkejä määritettynä',
          pier: 'Laituri',
          prepareConfiguration: 'Lisää konfiguraatio',
          prepareDisplay: 'Lisää näyttö',
          prepareStop: 'Lisää pysäkki',
          quickDisplayCreate: 'Luo uusi näyttö',
          seconds: 'sekuntia',
          stops: 'Pysäkit',
          stop: 'Pysäkki {{stop}}',
          stopCode: 'pysäkkinumero',
          stopName: 'Pysäkin nimi',
          stopRetrieveError: 'Virhe haettaessa pysäkkiä {{stopId}}',
          stopRetrieveNotFound: 'Haettua pysäkkiä {{stopId}} ei löytynyt',
          stopSearchError: 'Virhe haettaessa pysäkkiä stringillä {{searchPhrase}}',
          stopSearchNotFound: 'Haettua pysäkkiä stringillä {{searchPhrase}} ei löytynyt.',
          stopSearcher: 'Pysäkkietsin',
          stopSearcherDisplayedResultCount: 'Näytettävien reittien määrä',
          stopSearcherPhrase: 'Pysäkkihakusana',
          stopSearcherSearch: 'Etsi',
          stopSearcherSearching: 'Etsitään hakusanalla {{searchPhrase}}',
          tampereHelp: 'Pysäkki-id on sama kuin pysäkin numero. Esimerkiksi Keskusterori F:n pysäkiltä saat kirjoittamalla tampere:0010. Pysäkkinumerot löytyvät esimerkiksi Reittioppaasta.',
          titlebarTitle: 'Virtuaalimonitori',
          viewCarouselElementEditorDeleteView: 'Poista näkymä',
          viewCarouselElementEditorShownTime: 'Näytetty aika',
          viewCarouselElementEditorViewDisabled: 'Näkymä pois käytöstä.',
          viewEditorErrorStopNotFound: 'Pysäkkiä Id:llä {{stopId}} ei löytynyt.',
          viewEditorMoveStopUp: 'Siirrä tärkeysjärjestykessä ylämmäksi',
          viewEditorMoveStopDown: 'Siirrä tärkeysjärjestykessä alemmaksi',
          viewEditorName: 'Näkymän nimi',
          viewEditorRemoveStop: 'Poista pysäkki',
          viewEditorType: 'Näkymän tyyppi',
          viewErrorNoTitle: 'Nimeämätön näkymä',
          viewErrorUnknownView: 'Tuntematon näkymä \'{{viewTitle}}\' tyypillä {{viewType}}',
        },
      },
    },
  });

export default i18n;
