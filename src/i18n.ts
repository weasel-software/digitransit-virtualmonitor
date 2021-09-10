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
        breadCrumbsCreate: 'Create',
        breadCrumbsHelp: 'Help',
        breadCrumbsHome: 'Frontpage',
        cancelled: 'Canceled',
        chooseOne: 'Choose at least one',
        createViewTitle: 'Create new view',
        createStopView: 'Create stopview',
        continue: 'Continue',
        departureTime: 'Time/min',
        destination: 'Destination',
        displayLanguage: 'Esityskielet',
        displayDirection: 'Näytön suunta',
        dropdownPlaceHolder: 'Select...',
        en: 'English',
        endStopArrive: 'Arrives',
        endStopTerminus: 'Terminus',
        endOfLine:
          'Linjat, joille tämä on päätepysäkki Routes that this is the end of the line',
        fi: 'Finnish',
        frontPageParagraph1: 'todo',
        frontPageParagraph2: 'todo',
        frontPageParagraph3: 'todo',
        hideLines: 'Hide Lines ',
        hiddenNoChoices: 'No choices',
        hiddenRoutes: 'Hidden routes: ',
        horizontal: 'Horizontal',
        languageCode: 'en',
        layoutModalHeader: 'Valitse asettelutapa',
        lineId: 'Line',
        'no-departures': 'No known departures',
        'platform/stop': 'plat/stop',
        save: 'Save',
        station: 'Station',
        stop: 'Stop',
        stopsText: 'Stops',
        sv: 'Swedish',
        show: 'Show',
        showhidden: 'Settings for {{stop}} ({{code}})',
        timeShift: 'todo',
        timeShiftDescription: 'todo',
        timeShiftShow: 'todo',
        title: 'Now you can create...',
        vertical: 'Pysty',
        viewErrorUnknownView:
          "Unknown view with title '{{viewTitle}}' of type {{viewType}}",
        stoptitle: 'Title of stop view',
      },
    },
    fi: {
      translations: {
        'add-stop-placeholder': 'Lisää pysäkki...',
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
        show: 'Näytä',
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
        all: 'Alla',
        autosuggestPlaceHolder: 'Name or number of the stop',
        breadCrumbsCreate: 'Create',
        breadCrumbsHelp: 'Hjälp',
        breadCrumbsHome: 'hemsida',
        cancelled: 'Inställt',
        chooseOne: 'Valitse vähintään yksi',
        continue: 'Jatka',
        createStopView: 'Create stopview',
        destination: 'Destination',
        departureTime: 'Tid/min',
        displayLanguage: 'Esityskielet',
        displayDirection: 'Näytön suunta',
        dropdownPlaceHolder: 'Välja...',
        en: 'Engelska',
        endStopArrive: 'Ankomst',
        endStopTerminus: 'Ändhållplats',
        endOfLine: 'Linjat, joille tämä on päätepysäkki',
        fi: 'Finska',
        frontPageParagraph1: 'todo',
        frontPageParagraph2: 'todo',
        frontPageParagraph3: 'todo',
        hideLines: 'todo',
        hiddenNoChoices: 'Ei valintoja',
        hiddenRoutes: 'Piilotetut linjat: ',
        horizontal: 'Horizontal',
        layoutModalHeader: 'Valitse asettelutapa',
        lineId: 'Linjen',
        'no-departures': 'Inga kända avgångar',
        show: 'TODO',
        showHidden: 'TODO',
        station: 'Station',
        stop: 'Hållplats',
        languageCode: 'sv',
        'platform/stop': 'Plattf./Hållpl.',
        save: 'todo',
        stoptitle: 'TODO',
        stopsText: 'Hållplats',
        sv: 'Svenska',
        timeShift: 'Limit shown routes by time',
        timeShiftDescription: 'TODO',
        timeSHiftShow: 'TODO',
        title: 'Now you can create...',
        vertical: 'Vertical',
      },
    },
  },
});

export default i18n;
