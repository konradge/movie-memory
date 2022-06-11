const watchDates: { [key: string]: Date[] } = {};

export const getWatchDates = (movieId: number): Date[] => {
  return watchDates[movieId] || [];
};

export const addWatchDate = (movieId: number, date: Date) => {
  if (!watchDates[movieId]) watchDates[movieId] = [];
  watchDates[movieId].push(date);
};
