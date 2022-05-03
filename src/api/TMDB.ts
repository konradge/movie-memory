export interface Movie {
  title?: string;
  id?: number;
  poster_path?: string | null;
  overview?: string;
}

const searchMovie = (query: string) => {
  return get<{ results: Movie[] }>(
    "/search/movie",
    `language=en-US&query=${query}&page=1&include_adult=false`
  );
};

const get = <T>(endpoint: string, query: string) => {
  return new Promise<T>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&${query}`
    )
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

const image = (path: string): string => {
  return `https://image.tmdb.org/t/p/w500/${path}`;
};

export default { searchMovie, image };
