import { useEffect, useState } from "react";
import { typedFetch } from "./InternalAPI";
import {
  Credits,
  MovieImagesType,
  MovieOverviewType,
  MovieType,
  MovieVideo,
} from "./TMDB.types";

// Wrapper-Hook to request any TMDB-endpoint
const useRequestTMDB = <T>(endpoint: string, query?: string) => {
  const [result, setResult] = useState<null | T>(null);
  useEffect(() => {
    (async () => {
      const result = await typedFetch<T>(
        `https://api.themoviedb.org/3${endpoint}?api_key=${
          process.env["REACT_APP_TMDB_API_KEY"]
        }${query ? `&${query}` : ``}`
      );
      setResult(result);
    })();
  }, [endpoint, query]);

  return result;
};

const useSearchMovie = (query: string) => {
  return useRequestTMDB<{ results: MovieOverviewType[] }>(
    "/search/movie",
    `language=en-US&query=${query}&page=1&include_adult=false`
  );
};

const useGetMovieInfo = (movieId: string | number) => {
  return useRequestTMDB<MovieType>(`/movie/${movieId}`);
};

const useGetMovieImages = (movieId: number) => {
  return useRequestTMDB<MovieImagesType>(`/movie/${movieId}/images`);
};

const useGetMovieCredits = (movieId: number) => {
  return useRequestTMDB<Credits>(`/movie/${movieId}/credits`);
};

const useGetMovieVideos = (movieId: number) => {
  return useRequestTMDB<{ id: number; results: MovieVideo[] }>(
    `/movie/${movieId}/videos`
  );
};

const getImageURL = (path: string): string => {
  return `https://image.tmdb.org/t/p/w500/${path}`;
};

const TMDB = {
  useRequestTMDB,
  useSearchMovie,
  useGetMovieInfo,
  useGetMovieImages,
  getImageURL,
  useGetMovieCredits,
  useGetMovieVideos,
};

export default TMDB;
