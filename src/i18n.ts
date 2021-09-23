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
        'add-stop-placeholder': 'TODO',
        'add-at-least-one-stop': 'TODO',
        all: 'All',
        arriveTerminal: 'TODO',
        autosuggestPlaceHolder: 'Name or number of the stop',
        breadCrumbsCreate: 'Create',
        breadCrumbsHelp: 'Help',
        breadCrumbsHome: 'Frontpage',
        cancelled: 'Canceled',
        'clear-button-label': 'TODO',
        chooseOne: 'Choose at least one',
        closedStop: 'TODO',
        closedStopWithRange: 'TODO',
        configuration: 'TODO',
        continue: 'Continue',
        createViewTitle: 'Create new view',
        createStopView: 'Create stopview',
        deleteRenamings: 'TODO',
        departureTime: 'Time/min',
        destination: 'Destination',
        display: 'TODO',
        displayLanguage: 'TODO',
        displayDirection: 'TODO',
        displayEditorDefinePosition: 'TODO',
        displayEditorNewView: 'TODO',
        displayEditorStaticLink: 'TODO',
        dropdownPlaceHolder: 'Select...',
        duration: 'TODO',
        en: 'English',
        endStopArrive: 'Arrives',
        endStopTerminus: 'Terminus',
        endOfLine: 'Routes that this is the end of the line',
        fi: 'Finnish',
        favourite: 'TODO',
        frontPageParagraph1: 'TODO',
        frontPageParagraph2: 'TODO',
        frontPageParagraph3: 'TODO',
        headerSideLeft: 'TODO',
        headerSideRight: 'TODO',
        hideLines: 'Hide Lines ',
        hiddenNoChoices: 'No choices',
        hiddenRoutes: 'Hidden routes: ',
        horizontal: 'Horizontal',
        languageCode: 'en',
        latitude: 'TODO',
        layout: 'TODO',
        layoutEastWest: 'TODO',
        layoutModalHeader: 'TODO',
        lineId: 'Line',
        loading: 'TODO',
        loadingInfo: 'TODO',
        longitude: 'TODO',
        noStopsDefined: 'TODO',
        'no-departures': 'No known departures',
        pier: 'TODO',
        placeholderSideLeft: 'TODO',
        placeholderSideRight: 'TODO',
        'platform/stop': 'plat/stop',
        prepareConfiguration: 'TODO',
        prepareDisplay: 'TODO',
        prepareStop: 'TODO',
        previewView: 'TODO',
        quickDisplayCreate: 'TODO',
        renameDestinations: 'TODO',
        renamedDestinations: 'TODO',
        save: 'Save',
        search: 'TODO',
        'search-autosuggest-label': 'TODO',
        'search-autosuggest-len': 'TODO',
        'search-autosuggest-len_plural': 'TODO',
        'search-current-suggestion': 'TODO',
        seconds: 'TODO',
        settingsChanged: 'TODO',
        show: 'Show',
        showHidden: 'Settings for {{stop}} ({{code}})',
        station: 'Station',
        sideLeft: 'TODO',
        sideRight: 'TODO',
        stop: 'Stop',
        stopsText: 'Stops',
        stopCode: 'TODO',
        stopCodeOrPlatformNumber: 'TODO',
        stopName: 'TODO',
        stopRetrieveError: 'TODO',
        stopRetrieveNotFound: 'TODO',
        stopSearchError: 'TODO',
        stopSearchNotFound: 'TODO',
        stopSearchResult: 'TODO',
        stopSearcher: 'TODO',
        stopSearcherDisplayedResultCount: 'TODO',
        stopSearcherPhrase: 'TODO',
        stopSearcherSearch: 'TODO',
        stopSearcherSearching: 'TODO',
        stops: 'TODO',
        stoptitle: 'Title of stop view',
        sv: 'Swedish',
        showVia: 'Via information, if available',
        showhidden: 'Settings for {{stop}} ({{code}})',
        timeShift: 'TODO',
        timeShiftDescription: 'TODO',
        timeShiftShow: 'TODO',
        title: 'TODO',
        titlebarTitle: 'TODO',
        vertical: 'TODO',
        viewCarouselElementEditorDeleteView: 'TODO',
        viewCarouselElementEditorShownTime: 'TODO',
        viewCarouselElementEditorViewDisabled: 'TODO',
        viewEditorErrorStopNotFound: 'TODO',
        viewEditorMoveStopDown: 'TODO',
        viewEditorMoveStopUp: 'TODO',
        viewEditorName: 'TODO',
        viewEditorRemoveStop: 'TODO',
        viewEditorType: 'TODO',
        viewErrorNoTitle: 'TODO',
        viewErrorUnknownView:
          "Unknown view with title '{{viewTitle}}' of type {{viewType}}",
      },
    },
    fi: {
      translations: {
        'add-stop-placeholder': 'Lisää pysäkki...',
        'add-at-least-one-stop': 'Lisää vähintään yksi pysäkki',
        all: 'Kaikki',
        arriveTerminal: 'Saapuu / Päätepysäkki',
        autosuggestPlaceHolder: 'Pysäkin nimi tai numero',
        breadCrumbsCreate: 'Luo',
        breadCrumbsHelp: 'Apua',
        breadCrumbsHome: 'Etusivu',
        cancelled: 'Peruttu',
        'clear-button-label': 'Tyhjennä',
        chooseOne: 'Valitse vähintään yksi',
        closedStop: 'Pysäkki suljettu',
        closedStopWithRange:
          'Pysäkki {{name}} {{code}}\nsuljettu aikavälillä\n{{startTime}} - {{endTime}}',
        configuration: 'Konfiguraatio',
        continue: 'Jatka',
        createViewTitle: 'Uuden näkymän luonti',
        createStopView: 'Luo pysäkkinäyttö',
        deleteRenamings: 'Kumoa tekstimuutokset',
        departureTime: 'Aika/min',
        destination: 'Määränpää',
        display: 'Näyttö',
        displayLanguage: 'Esityskielet',
        displayDirection: 'Näytön suunta',
        displayEditorDefinePosition: 'Määritä sijainti',
        displayEditorNewView: 'Lisää uusi pysäkkinäkymä karuselliin',
        displayEditorStaticLink: 'Luo näkymä',
        dropdownPlaceHolder: 'Valitse...',
        duration: 'Kesto',
        en: 'Englanti',
        endStopArrive: 'Saapuu',
        endStopTerminus: 'Päätepysäkki',
        endOfLine: 'Linjat, joille tämä on päätepysäkki',
        fi: 'Suomi',
        favourite: 'Suosikki',
        frontPageParagraph1:
          'Luo itsellesi puhelimen tai tietokoneen ruudulla näkyvä pysäkkinäyttö ja valitse minkä pysäkkien ja linjojen aikatauluista olet kiinnostunut.',
        frontPageParagraph2:
          'Palvelulla voi tuottaa myös julkisten tilojen auloihin tai yritysten intranet-verkkoon kyseisen paikan läheisyydessä olevien pysäkkien aikataulut.',
        frontPageParagraph3:
          'Aikataulujen lisäksi palvelun kautta saa liikenne- ja häiriötiedotteita.',
        headerSideLeft: 'Vasen palsta',
        headerSideRight: 'Oikea palsta',
        hideLines: 'Piilota linjoja ',
        hiddenNoChoices: 'Ei valintoja',
        hiddenRoutes: 'Piilotetut linjat: ',
        horizontal: 'Vaaka',
        languageCode: 'fi',
        latitude: 'Latitude',
        layout: 'Asettelu',
        layoutEastWest: 'Itään/länteen',
        layoutModalHeader: 'Valitse asettelutapa',
        lineId: 'Linja',
        loading: 'Ladataan…',
        loadingInfo: 'Ladataan…',
        longitude: 'Longitude',
        noStopsDefined: 'Ei pysäkkejä määritettynä',
        'no-departures': 'Ei tiedossa olevia lähtöjä',
        pier: 'Laituri',
        placeholderSideLeft: 'Ei valittuja pysäkkejä',
        placeholderSideRight: 'Ei valittuja pysäkkejä',
        'platform/stop': 'Lait./Pys.',
        prepareConfiguration: 'Lisää konfiguraatio',
        prepareDisplay: 'Lisää uusi pysäkkinäkymä',
        prepareStop: 'Lisää pysäkki',
        previewView: 'Esikatsele',
        quickDisplayCreate: 'Luo uusi näyttö',
        renameDestinations: 'Muokkaa määränpää-tekstejä',
        renamedDestinations: 'Muutetut määränpäät: ',
        save: 'Tallenna',
        search: 'Etsi',
        'search-autosuggest-label':
          'Paikka, linja ja pysäkkihaku. Navigoi listassa nuolinäppäimillä ja valitse enterillä',
        'search-autosuggest-len': ' Löydettiin {{count}} ehdotus',
        'search-autosuggest-len_plural': ' Löydettiin {{count}} ehdotusta',
        'search-current-suggestion': 'Tämänhetkinen valinta: {{selection}}',
        seconds: 'sekuntia',
        settingsChanged: 'Muutettuja asetuksia',
        show: 'Näytä',
        showVia: 'Kauttakulkutieto (via), jos saatavilla',
        showHidden: 'Pysäkin {{stop}} ({{code}}) Asetukset',
        station: 'Asema',
        sideLeft: 'Vasen otsikko',
        sideRight: 'Oikea otsikko',
        stop: 'Pysäkki',
        stopsText: 'Pysäkki',
        stopCode: 'pysäkkinumero',
        stopCodeOrPlatformNumber: 'Pysäkki- tai laiturinumero',
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
        sv: 'Ruotsi',
        timeShift: 'Rajaa lähtöjä ajan mukaan',
        timeShiftDescription:
          'Voit rajata esityksestä lähdöt, joihin pysäkkinäytön sijainnista ei\n' +
          '            ole mahdollista ehtiä kyytiin.',
        timeShiftShow: 'Näytä vain lähdöt, joiden lähtöön on yli',
        title: 'Nyt voit luoda...',
        titlebarTitle: 'Virtuaalimonitori',
        vertical: 'Pysty',
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
        'add-stop-placeholder': 'TODO',
        'add-at-least-one-stop': 'TODO',
        all: 'Alla',
        arriveTerminal: 'TODO',
        autosuggestPlaceHolder: 'TODO',
        breadCrumbsCreate: 'TODO',
        breadCrumbsHelp: 'Hjälp',
        breadCrumbsHome: 'hemsida',
        cancelled: 'Inställt',
        'clear-button-label': 'TODO',
        chooseOne: 'TODO',
        closedStop: 'TODO',
        closedStopWithRange: 'TODO',
        configuration: 'TODO',
        continue: 'TODO',
        createViewTitle: 'TODO',
        createStopView: 'TODO',
        deleteRenamings: 'TODO',
        departureTime: 'Tid/min',
        destination: 'Destination',
        display: 'TODO',
        displayLanguage: 'TODO',
        displayDirection: 'TODO',
        displayEditorDefinePosition: 'TODO',
        displayEditorNewView: 'TODO',
        displayEditorStaticLink: 'TODO',
        dropdownPlaceHolder: 'Välja...',
        duration: 'TODO',
        en: 'Engelska',
        endStopArrive: 'Ankomst',
        endStopTerminus: 'Ändhållplats',
        endOfLine: 'TODO',
        fi: 'Finska',
        favourite: 'TODO',
        frontPageParagraph1: 'TODO',
        frontPageParagraph2: 'TODO',
        frontPageParagraph3: 'TODO',
        headerSideLeft: 'TODO',
        headerSideRight: 'TODO',
        hideLines: 'TODO',
        hiddenNoChoices: 'TODO',
        hiddenRoutes: 'TODO',
        horizontal: 'TODO',
        languageCode: 'sv',
        latitude: 'TODO',
        layout: 'TODO',
        layoutEastWest: 'TODO',
        layoutModalHeader: 'TODO',
        lineId: 'Linjen',
        loading: 'TODO',
        loadingInfo: 'TODO',
        longitude: 'TODO',
        noStopsDefined: 'TODO',
        'no-departures': 'Inga kända avgångar',
        pier: 'TODO',
        placeholderSideLeft: 'TODO',
        placeholderSideRight: 'TODO',
        'platform/stop': 'Plattf./Hållpl.',
        prepareConfiguration: 'TODO',
        prepareDisplay: 'TODO',
        prepareStop: 'TODO',
        previewView: 'TODO',
        quickDisplayCreate: 'TODO',
        renameDestinations: 'TODO',
        renamedDestinations: 'TODO',
        save: 'TODO',
        search: 'TODO',
        'search-autosuggest-label': 'TODO',
        'search-autosuggest-len': 'TODO',
        'search-autosuggest-len_plural': 'TODO',
        'search-current-suggestion': 'TODO',
        seconds: 'TODO',
        settingsChanged: 'TODO',
        show: 'TODO',
        showVia: 'TODO',
        showHidden: 'TODO',
        station: 'Station',
        sideLeft: 'TODO',
        sideRight: 'TODO',
        stop: 'Hållplats',
        stopsText: 'Hållplats',
        stopCode: 'TODO',
        stopCodeOrPlatformNumber: 'TODO',
        stopName: 'TODO',
        stopRetrieveError: 'TODO',
        stopRetrieveNotFound: 'TODO',
        stopSearchError: 'TODO',
        stopSearchNotFound: 'TODO',
        stopSearchResult: 'TODO',
        stopSearcher: 'TODO',
        stopSearcherDisplayedResultCount: 'TODO',
        stopSearcherPhrase: 'TODO',
        stopSearcherSearch: 'TODO',
        stopSearcherSearching: 'TODO',
        stops: 'TODO',
        stoptitle: 'TODO',
        sv: 'Svenska',
        timeShift: 'TODO',
        timeShiftDescription: 'TODO',
        timeShiftShow: 'TODO',
        title: 'TODO',
        titlebarTitle: 'TODO',
        vertical: 'TODO',
        viewCarouselElementEditorDeleteView: 'TODO',
        viewCarouselElementEditorShownTime: 'TODO',
        viewCarouselElementEditorViewDisabled: 'TODO',
        viewEditorErrorStopNotFound: 'TODO',
        viewEditorMoveStopDown: 'TODO',
        viewEditorMoveStopUp: 'TODO',
        viewEditorName: 'TODO',
        viewEditorRemoveStop: 'TODO',
        viewEditorType: 'TODO',
        viewErrorNoTitle: 'TODO',
        viewErrorUnknownView: 'TODO',
      },
    },
  },
});

export default i18n;
