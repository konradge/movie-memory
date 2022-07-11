const watchDates: { [key: string]: Date[] } = {};

export const getWatchDates = (movieId: number): Date[] => {
  return watchDates[movieId] || [];
};

export const addWatchDate = (movieId: number, date: Date) => {
  if (!watchDates[movieId]) watchDates[movieId] = [];
  watchDates[movieId]?.push(date);
};

// Wrapper for getting a specific type from fetch-API
export const typedFetch = <T>(
  input: string,
  init?: RequestInit | undefined
) => {
  return new Promise<T>((resolve, reject) => {
    fetch(input, init)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};
