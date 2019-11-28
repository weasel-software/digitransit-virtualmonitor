export default {
   tampere: {
     feedId: 'tampere',
      uri: 'https://api.digitransit.fi/routing/v1/routers/waltti/index/graphql',
      // Texts for Help page
      exampleStopId: 'tampere:0010',
      exampleStopName: 'Keskustori F',
      exampleStopIds: 'tampere:0010,tampere:3729,tampere:3730',
      // Tampere's help page differs sligthly from others, so reittiopasurls are not needed
      exampleReittiopasUrl: '',
      exampleReittiopasStopId: '',
  },
    hsl: {
      feedId: 'hsl',
      uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', 
      exampleStopId: 'HSL:1230109',
      exampleStopName: 'Kumpulan kampus',
      exampleStopIds: 'HSL:1040279,HSL:1230109',
      exampleReittiopasUrl: 'reittiopas.hsl.fi/pysakit/HSL%3A123010',
      exampleReittiopasStopId: 'HSL:123010',
    },
    matka: {
      feedId: 'matka',
      uri: 'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql', 
      exampleStopId: 'MATKA:7_201860',
      exampleStopName: 'Umpikuja E',
      exampleStopIds: 'MATKA:7_201860,MATKA:7_201848',
      exampleReittiopasUrl: ' https://opas.matka.fi/pysakit/MATKA%3A7_201848',
      exampleReittiopasStopId: 'MATKA:7_201848',
    },
};


