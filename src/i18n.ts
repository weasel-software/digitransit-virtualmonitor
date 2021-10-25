import i18n from 'i18next';

i18n.init({
  debug: false,
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
        'add-at-least-one-stop': 'TODO',
        all: 'All',
        arriveTerminal: 'TODO',
        autosuggestPlaceHolder: 'Name or number of the stop',
        breadCrumbsCreate: 'TODO',
        breadCrumbsHelp: 'Help',
        breadCrumbsModify: 'TODO',
        breadCrumbsOwnMonitors: 'TODO',
        breadCrumbsSite: 'TODO',
        cancel: 'Cancel',
        cancelled: 'Canceled',
        chooseOne: 'Choose at least one',
        closedStop: 'TODO',
        closedStopWithRange: 'TODO',
        continue: 'Continue',
        createViewTitle: 'TODO',
        deleteRenamings: 'TODO',
        departureTime: 'Time/min',
        destination: 'Destination',
        displayLanguage: 'TODO',
        displayDirection: 'TODO',
        displayEditorStaticLink: 'TODO',
        duration: 'TODO',
        'edit-display': 'TODO',
        endOfLine: 'Routes that this is the end of the line',
        frontPageParagraph1: 'TODO',
        frontPageParagraph2: 'TODO',
        frontPageParagraph3: 'TODO',
        headerSideLeft: 'TODO',
        headerSideRight: 'TODO',
        hideLines: 'Hide Lines ',
        horizontal: 'Horizontal',
        languageCode: 'en',
        layout: 'TODO',
        layoutEastWest: 'TODO',
        layoutModalHeader: 'TODO',
        lineId: 'Line',
        loading: 'TODO',
        loadingInfo: 'TODO',
        modify: 'TODO',
        'no-departures': 'No known departures',
        placeholderSideLeft: 'TODO',
        placeholderSideRight: 'TODO',
        'platform/stop': 'plat/stop',
        prepareDisplay: 'TODO',
        prepareStop: 'TODO',
        preview: 'TODO',
        previewView: 'TODO',
        quickDisplayCreate: 'TODO',
        renameDestinations: 'TODO',
        save: 'Save',
        'search-autosuggest-label': 'TODO',
        'search-autosuggest-len': 'TODO',
        'search-autosuggest-len_plural': 'TODO',
        'search-current-suggestion': 'TODO',
        settingsChanged: 'TODO',
        show: 'Show',
        sideLeft: 'TODO',
        sideRight: 'TODO',
        staticMonitorTitle: 'TODO',
        stop: 'Stop',
        stopCodeOrPlatformNumber: 'TODO',
        stoptitle: 'Title of stop view',
        showRouteColumn: 'TODO',
        showVia: 'Via information, if available',
        stopSettings: 'Settings for {{stop}} ({{code}})',
        timeShift: 'TODO',
        timeShiftDescription: 'TODO',
        timeShiftShow: 'TODO',
        vertical: 'TODO',
        viewEditorName: 'TODO',
      },
    },
    fi: {
      translations: {
        'add-at-least-one-stop': 'Lisää vähintään yksi pysäkki',
        all: 'Kaikki',
        arriveTerminal: 'Saapuu / Päätepysäkki',
        autosuggestPlaceHolder: 'Pysäkin nimi tai numero',
        breadCrumbsCreate: 'Luo pysäkkinäyttö',
        breadCrumbsHelp: 'Apua',
        breadCrumbsModify: 'Muokkaa pysäkkinäyttöä',
        breadCrumbsOwnMonitors: 'Omat pysäkkinäytöt',
        breadCrumbsSite: 'Reittiopas',
        cancel: 'Peruuta',
        cancelled: 'Peruttu',
        chooseOne: 'Valitse vähintään yksi',
        closedStop: 'Pysäkki suljettu',
        closedStopWithRange: 'Pysäkki {{name}} {{code}}\nsuljettu aikavälillä\n{{startTime}} - {{endTime}}',
        continue: 'Jatka',
        createViewTitle: 'Uuden näkymän luonti',
        deleteRenamings: 'Tyhjennä tekstimuutokset',
        departureTime: 'Aika/min',
        destination: 'Määränpää',
        displayLanguage: 'Esityskielet',
        displayDirection: 'Näytön suunta',
        displayEditorStaticLink: 'Luo näkymä',
        duration: 'Kesto / esityskieli',
        'edit-display': 'Muokkaa näyttöä',
        endOfLine: 'Linjat, joille tämä on päätepysäkki',
        frontPageParagraph1: 'Luo itsellesi puhelimen tai tietokoneen ruudulla näkyvä pysäkkinäyttö ja valitse minkä pysäkkien ja linjojen aikatauluista olet kiinnostunut.',
        frontPageParagraph2: 'Palvelulla voi tuottaa myös julkisten tilojen auloihin tai yritysten intranet-verkkoon kyseisen paikan läheisyydessä olevien pysäkkien aikataulut.',
        frontPageParagraph3: 'Joukkoliikenteen aikataulut näkyvällä paikalla kannustavat käyttämään joukkoliikennettä ja aikataulujen lisäksi palvelun kautta saat myös liikenne- ja häiriötiedotteet.',
        headerSideLeft: 'Vasen palsta',
        headerSideRight: 'Oikea palsta',
        hideLines: 'Piilota linjoja ',
        horizontal: 'Vaaka',
        languageCode: 'fi',
        layout: 'Asettelu',
        layoutEastWest: 'Itään/länteen',
        layoutModalHeader: 'Valitse asettelutapa',
        lineId: 'Linja',
        loading: 'Ladataan…',
        loadingInfo: 'Ladataan…',
        modify: 'Muokkaa',
        'no-departures': 'Ei tiedossa olevia lähtöjä',
        placeholderSideLeft: 'Ei valittuja pysäkkejä',
        placeholderSideRight: 'Ei valittuja pysäkkejä',
        'platform/stop': 'Lait./Pys.',
        prepareDisplay: 'Lisää uusi pysäkkinäkymä',
        prepareStop: 'Lisää pysäkki',
        preview: 'Esikatselu',
        previewView: 'Esikatsele',
        quickDisplayCreate: 'Luo pysäkkinäyttö',
        renameDestinations: 'Muokkaa määränpää-tekstejä',
        save: 'Tallenna',
        'search-autosuggest-label': 'Paikka, linja ja pysäkkihaku. Navigoi listassa nuolinäppäimillä ja valitse enterillä',
        'search-autosuggest-len': ' Löydettiin {{count}} ehdotus',
        'search-autosuggest-len_plural': ' Löydettiin {{count}} ehdotusta',
        'search-current-suggestion': 'Tämänhetkinen valinta: {{selection}}',
        settingsChanged: 'Muutettuja asetuksia',
        show: 'Näytä',
        showRouteColumn: 'Linja-sarake',
        showVia: 'Kauttakulkutieto (via), jos saatavilla',
        stopSettings: 'Pysäkin {{stop}} {{code}} asetukset',
        sideLeft: 'Vasen otsikko',
        sideRight: 'Oikea otsikko',
        staticMonitorTitle: 'Näytön nimi',
        stop: 'Pysäkki',
        stopCodeOrPlatformNumber: 'Pysäkki- tai laiturinumero',
        stoptitle: 'Pysäkkinäkymän nimi',
        timeShift: 'Rajaa lähtöjä ajan mukaan',
        timeShiftDescription: 'Voit rajata esityksestä lähdöt, joihin pysäkkinäytön sijainnista ei\nole mahdollista ehtiä kyytiin.',
        timeShiftShow: 'Näytä vain lähdöt, joiden lähtöön on yli',
        vertical: 'Pysty',
        viewEditorName: 'Näkymän nimi',
      },
    },
    sv: {
      translations: {
        'add-at-least-one-stop': 'TODO',
        all: 'Alla',
        arriveTerminal: 'TODO',
        autosuggestPlaceHolder: 'TODO',
        breadCrumbsCreate: 'TODO',
        breadCrumbsHelp: 'Hjälp',
        breadCrumbsModify: 'TODO',
        breadCrumbsOwnMonitors: 'TODO',
        breadCrumbsSite: 'TODO',
        cancel: 'TODO',
        cancelled: 'Inställt',
        chooseOne: 'TODO',
        closedStop: 'TODO',
        closedStopWithRange: 'TODO',
        continue: 'TODO',
        createViewTitle: 'TODO',
        deleteRenamings: 'TODO',
        departureTime: 'Tid/min',
        destination: 'Destination',
        displayLanguage: 'TODO',
        displayDirection: 'TODO',
        displayEditorStaticLink: 'TODO',
        duration: 'TODO',
        'edit-display': 'TODO',
        endOfLine: 'TODO',
        frontPageParagraph1: 'TODO',
        frontPageParagraph2: 'TODO',
        frontPageParagraph3: 'TODO',
        headerSideLeft: 'TODO',
        headerSideRight: 'TODO',
        hideLines: 'TODO',
        horizontal: 'TODO',
        languageCode: 'sv',
        layout: 'TODO',
        layoutEastWest: 'TODO',
        layoutModalHeader: 'TODO',
        lineId: 'Linjen',
        loading: 'TODO',
        loadingInfo: 'TODO',
        modify: 'TODO',
        'no-departures': 'Inga kända avgångar',
        placeholderSideLeft: 'TODO',
        placeholderSideRight: 'TODO',
        'platform/stop': 'Plattf./Hållpl.',
        prepareDisplay: 'TODO',
        prepareStop: 'TODO',
        preview: 'TODO',
        previewView: 'TODO',
        quickDisplayCreate: 'TODO',
        renameDestinations: 'TODO',
        save: 'TODO',
        'search-autosuggest-label': 'TODO',
        'search-autosuggest-len': 'TODO',
        'search-autosuggest-len_plural': 'TODO',
        'search-current-suggestion': 'TODO',
        settingsChanged: 'TODO',
        show: 'TODO',
        showRouteColumn: 'TODO',
        showVia: 'TODO',
        stopSettings: 'TODO',
        sideLeft: 'TODO',
        sideRight: 'TODO',
        staticMonitorTitle: 'TODO',
        stop: 'Hållplats',
        stopCodeOrPlatformNumber: 'TODO',
        stoptitle: 'TODO',
        timeShift: 'TODO',
        timeShiftDescription: 'TODO',
        timeShiftShow: 'TODO',
        vertical: 'TODO',
        viewEditorName: 'TODO',
      },
    },
  },
});

export default i18n;
