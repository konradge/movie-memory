const watchDates: { [key: string]: Date[] } = {};

export const getWatchDates = (movieId: string): Date[] => {
  return watchDates[movieId] || [];
};

export const addWatchDate = (movieId: string, date: Date) => {
  if (!watchDates[movieId]) watchDates[movieId] = [];
  watchDates[movieId].push(date);
};
