import { useEffect, useState } from "react";
import MovieImages from "../Components/MovieInfo/MovieImages";

export interface MovieOverviewType {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface MovieType {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | Object;
  budget?: number;
  genres?: { id?: number; name?: string }[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: {
    name?: string;
    id?: number;
    logo_path?: string | null;
    origin_country?: string;
  }[];
  production_countries?: Country[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: Country[];
  status?:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface Country {
  iso_3166_1?: string;
  name?: string;
}

const searchMovie = (query: string) => {
  return get<{ results: MovieOverviewType[] }>(
    "/search/movie",
    `language=en-US&query=${query}&page=1&include_adult=false`
  );
};

const getMovieInfo = (movieId: string | number) => {
  return get<MovieType>(`/movie/${movieId}`);
};

const get = <T>(endpoint: string, query?: string) => {
  return new Promise<T>((resolve, reject) => {
    fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&${query}`
    )
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
};

interface MovieImages {
  backdrops: { file_path: string }[];
  logos: { file_path: string }[];
  posters: { file_path: string }[];
}

export const useMovieImages = (movieId: number) => {
  const [movieImages, setMovieImages] = useState<null | MovieImages>(null);
  useEffect(() => {
    (async () => {
      const result = await get<MovieImages>(`/movie/${movieId}/images`);
      setMovieImages(result);
    })();
  }, [movieId]);

  return movieImages;
};

const image = (path: string): string => {
  return `https://image.tmdb.org/t/p/w500/${path}`;
};

export default { searchMovie, getMovieInfo, image };
