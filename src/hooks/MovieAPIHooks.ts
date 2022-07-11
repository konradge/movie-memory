import {
  MovieDetailsType,
  MovieIdType,
  MovieOverviewType,
} from "../types/Movie.types";
import { ActorType, CrewType } from "../types/Person.types";
import { useEffect, useState } from "react";
import {
  getMovie,
  getMovieCredits,
  getMovieImages,
  getMovieVideos,
  MovieImagesType,
  searchMovie,
} from "../api/Movie";

const useAPI = <P, R>(
  getResult: (...args: P[]) => Promise<R>,
  args: P[],
  defaultValue: R
) => {
  const [result, setResult] = useState<R>(defaultValue);
  useEffect(() => {
    (async () => {
      const res = await getResult(...args);
      setResult(res);
    })();
  }, [args, getResult]);

  return result;
};

export const useGetMovie = (movieId: MovieIdType) => {
  return useAPI(getMovie, [movieId], { id: movieId } as MovieDetailsType);
};

export const useSearchMovie = (query: string) => {
  return useAPI(searchMovie, [query], [] as MovieOverviewType[]);
};

export const useGetMovieImages = (movieId: MovieIdType) => {
  return useAPI(getMovieImages, [movieId], {
    backdrops: [],
    posters: [],
  } as MovieImagesType);
};

type Credits = {
  id: number;
  cast: ActorType[];
  crew: CrewType[];
};

export const useGetMovieCredits = (movieId: MovieIdType) => {
  return useAPI(getMovieCredits, [movieId], {
    id: movieId,
    cast: [],
    crew: [],
  } as Credits);
};

export type MovieVideo = { key: string; published_at: string; type: string };

export const useGetMovieVideos = (movieId: MovieIdType) => {
  return useAPI(getMovieVideos, [movieId], [] as MovieVideo[]);
};
