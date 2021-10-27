export const defaultStopCard = t => ({
  id: 1,
  title: { fi: t('viewEditorName'), sv: '', en: '' },
  columns: {
    left: {
      inUse: true,
      title: { fi: t('sideLeft'), sv: '', en: '' },
      stops: [],
    },
    right: {
      inUse: false,
      title: { fi: t('sideRight'), sv: '', en: '' },
      stops: [],
    },
  },
  layout: 2,
  duration: 5,
});

export const getStopIcon = stop => {
  const stopWithStationIcons = [
    'airplane',
    'ferry',
    'subway',
    'hybrid-bus-tram',
  ];
  if (
    stop.locationType === 'STATION' ||
    stopWithStationIcons.includes(stop.vehicleMode?.toLowerCase())
  ) {
    return `station-${stop.vehicleMode?.toLowerCase()}`;
  }
  return `stop-${stop.vehicleMode?.toLowerCase()}`;
};
