import i18n from 'i18next';

i18n.init({
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
        all: 'All',
        autosuggestPlaceHolder: 'Name or number of the stop',
        createViewTitle: 'Create new view',
        departureTime: 'Time',
        destination: 'Destination',
        dropdownPlaceHolder: 'Select...',
        frontPageParagraph1: 'todo',
        frontPageParagraph2: 'todo',
        frontPageParagraph3: 'todo',
        hiddenNoChoices: 'No choices',
        hiddenRoutes: 'Hidden routes',
        languageCode: 'en',
        lineId: 'Line',
        station: 'Station',
        stopsText: 'Stops',
        showhidden: 'Select routes to hide for the stop:',
        title: 'Now you can create...',
        viewErrorUnknownView:
          "Unknown view with title '{{viewTitle}}' of type {{viewType}}",
        stoptitle: 'Title of stop view',
      },
    },
    fi: {
      translations: {
        all: 'Kaikki',
        arriveTerminal: 'Saapuu / Päätepysäkki',
        autosuggestPlaceHolder: 'Pysäkin nimi tai numero',
        canceled: 'Peruttu',
        configuration: 'Konfiguraatio',
        createViewTitle: 'Uuden näkymän luonti',
        departureTime: 'Lähtöaika',
        destination: 'Määränpää',
        display: 'Näyttö',
        displayEditorDefinePosition: 'Määritä sijainti',
        displayEditorNewView: 'Lisää uusi pysäkkinäkymä karuselliin',
        displayEditorStaticLink: 'Luo näkymä',
        dropdownPlaceHolder: 'Valitse...',
        frontPageParagraph1:
          'Luo itsellesi puhelimen tai tietokoneen ruudulla näkyvä pysäkkinäyttö ja valitse minkä pysäkkien ja linjojen aikatauluista olet kiinnostunut.',
        frontPageParagraph2:
          'Palvelulla voi tuottaa myös julkisten tilojen auloihin tai yritysten intranet-verkkoon kyseisen paikan läheisyydessä olevien pysäkkien aikataulut.',
        frontPageParagraph3:
          'Aikataulujen lisäksi palvelun kautta saa liikenne- ja häiriötiedotteita.',
        hiddenNoChoices: 'Ei valintoja',
        hiddenRoutes: 'Piilotetut linjat',
        languageCode: 'fi',
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
        showHidden: 'Valitse piilotettavat linjat pysäkille:',
        station: 'Asema',
        stop: 'Pysäkki {{stop}}',
        stopsText: 'Pysäkki',
        stopCode: 'pysäkkinumero',
        stopName: 'Pysäkin nimi',
        stopRetrieveError: 'Virhe haettaessa pysäkkiä {{stopId}}',
        stopRetrieveNotFound: 'Haettua pysäkkiä {{stopId}} ei löytynyt',
        stopSearchError:
          'Virhe haettaessa pysäkkiä stringillä {{searchPhrase}}',
        stopSearchNotFound:
          'Haettua pysäkkiä stringillä {{searchPhrase}} ei löytynyt.',
        stopSearchResult: 'Hakutulokset',
        stopSearcher: 'Pysäkkietsin',
        stopSearcherDisplayedResultCount: 'Näytettävien reittien määrä',
        stopSearcherPhrase: 'Pysäkkihakusana',
        stopSearcherSearch: 'Etsi',
        stopSearcherSearching: 'Etsitään hakusanalla {{searchPhrase}}',
        stops: 'Pysäkit',
        stoptitle: 'Pysäkkinäkymän nimi',
        title: 'Nyt voit luoda...',
        titlebarTitle: 'Virtuaalimonitori',
        viewCarouselElementEditorDeleteView: 'Poista näkymä',
        viewCarouselElementEditorShownTime: 'Näytetty aika',
        viewCarouselElementEditorViewDisabled: 'Näkymä pois käytöstä.',
        viewEditorErrorStopNotFound: 'Pysäkkiä Id:llä {{stopId}} ei löytynyt.',
        viewEditorMoveStopDown: 'Siirrä alemmaksi',
        viewEditorMoveStopUp: 'Siirrä ylemmäksi',
        viewEditorName: 'Näkymän nimi',
        viewEditorRemoveStop: 'Poista pysäkki',
        viewEditorType: 'Näkymän tyyppi',
        viewErrorNoTitle: 'Nimeämätön näkymä',
        viewErrorUnknownView:
          "Tuntematon näkymä '{{viewTitle}}' tyypillä {{viewType}}",
      },
    },
    sv: {
      translations: {
        all: 'Alla',
        autosuggestPlaceHolder: 'Name or number of the stop',
        dropdownPlaceHolder: 'Välja...',
        frontPageParagraph1: 'todo',
        frontPageParagraph2: 'todo',
        frontPageParagraph3: 'todo',
        hiddenNoChoices: 'Ei valintoja',
        hiddenRoutes: 'Piilotetut linjat',
        showHidden: 'TODO',
        station: 'Station',
        languageCode: 'sv',
        stoptitle: 'TODO',
        stopsText: 'Hållplats',
        title: 'Now you can create...',
      },
    },
  },
});

export default i18n;
