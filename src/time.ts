import { DateTime } from 'luxon';

export type Milliseconds = number;
export type EpochMilliseconds = Milliseconds;

export const getDepartureTime = (
  time,
  minutesThreshold,
  serviceDay,
  useTilde,
  realtime,
) => {
  // Format to default hh:mm from serviceday + time from day's start
  const d = DateTime.fromSeconds(serviceDay + time).toFormat('HH:mm');
  const secondsFromMidnight = new Date().setHours(0, 0, 0, 0);
  const serviceDaySeconds =
    time - (getCurrentSeconds() - secondsFromMidnight / 1000);
  // custom logic for tampere, if there is no realtime, we show the full time, ie. 13:53.
  if (!useTilde) {
    if (
      realtime &&
      serviceDaySeconds < minutesThreshold &&
      serviceDay * 1000 < DateTime.now().ts
    ) {
      const diffInMinutes = Math.floor(serviceDaySeconds / 60);
      return (diffInMinutes < 0 ? 0 : diffInMinutes).toString();
    }
    return d.toString();
  }
  if (
    serviceDaySeconds < minutesThreshold &&
    serviceDay * 1000 < DateTime.now().ts
  ) {
    const diffInMinutes = Math.floor(serviceDaySeconds / 60);
    return (diffInMinutes < 0 ? 0 : diffInMinutes).toString();
  }
  return d.toString();
};

export const formatDate = (date, locale) => {
  const newDate = DateTime.fromISO(date.toISOString())
    .setLocale(locale)
    .toFormat('EEEE d.M.yyyy');
  return newDate.charAt(0).toUpperCase() + newDate.slice(1);
};

export const getCurrentSeconds = () => {
  return Number(DateTime.now().toSeconds().toFixed(0));
};

export const getCurrentSecondsWithMilliSeconds = () => {
  return DateTime.now().toSeconds();
};

export const setDate = daysToAdd => {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + daysToAdd);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

export const getTodayWithFormat = format => {
  return DateTime.now().setLocale('fi').toFormat(format);
};

export const utcToSeconds = utc => {
  const newDate = DateTime.fromISO(utc, { zone: 'utc' });
  return Number(newDate.toSeconds().toFixed(0));
};

export const formattedDateTimeFromSeconds = (secs, format) => {
  return DateTime.fromSeconds(secs).setLocale('fi').toFormat(format);
};

export const getTomorrowWithFormat = format => {
  return DateTime.now().plus({ days: 1 }).setLocale('fi').toFormat(format);
};
