import {
  MovieDetailsType,
  MovieIdType,
  MovieOverviewType,
} from "../types/Movie.types";
import { ActorType, CrewType } from "../types/Person.types";
import TMDB from "./TMDB";

export const getMovie = (movieId: MovieIdType) => {
  return new Promise<MovieDetailsType>(async (resolve, reject) => {
    try {
      const res = await TMDB.request<MovieDetailsType>(`/movie/${movieId}`);
      resolve({
        ...res,
        poster_path: imageURL(res.poster_path),
      });
    } catch (error) {
      console.log("Error occured!");
      reject(error);
    }
  });
};

export const searchMovie = (query: string) => {
  return new Promise<MovieOverviewType[]>(async (resolve, reject) => {
    try {
      // TODO: Search multiple pages
      const { results } = await TMDB.request<{ results: MovieOverviewType[] }>(
        `/search/movie`,
        `language=en-US&query=${query}&page=1`
      );
      resolve(
        results.map((res) => ({
          ...res,
          poster_path: imageURL(res.poster_path),
        }))
      );
    } catch (error) {
      reject(error);
    }
  });
};

export interface MovieImagesType {
  backdrops: string[];
  posters: string[];
}

const imageURL = (path?: string | null) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};

export const getMovieImages = (movieId: MovieIdType) => {
  // TMDB return incomplete file_paths, which need to be processed
  type APIImageType = {
    backdrops: { file_path: string }[];
    posters: { file_path: string }[];
  };

  return new Promise<MovieImagesType>(async (resolve, reject) => {
    try {
      const { backdrops, posters }: APIImageType =
        await TMDB.request<APIImageType>(`/movie/${movieId}/images`);
      resolve({
        backdrops: backdrops.map((b) => imageURL(b.file_path)),
        // logos: logos.map((l) => imageURL(l.file_path)),
        posters: posters.map((p) => imageURL(p.file_path)),
      });
    } catch (error) {
      reject(error);
    }
  });
};

type Credits = {
  id: number;
  cast: ActorType[];
  crew: CrewType[];
};

export const getMovieCredits = (movieId: MovieIdType) => {
  return new Promise<Credits>(async (resolve, reject) => {
    try {
      const { id, cast, crew }: Credits = await TMDB.request<Credits>(
        `/movie/${movieId}/credits`
      );
      resolve({
        cast: cast.map((c) => ({
          ...c,
          profile_path: c.profile_path && imageURL(c.profile_path),
        })),
        id: id,
        crew: crew.map((c) => ({
          ...c,
          profile_path: c.profile_path && imageURL(c.profile_path),
        })),
      });
    } catch (error) {
      reject(error);
    }
  });
};

export type MovieVideo = { key: string; published_at: string; type: string };

export const getMovieVideos = (movieId: MovieIdType) => {
  return new Promise<MovieVideo[]>(async (resolve, reject) => {
    try {
      const res = await TMDB.request<{ results: MovieVideo[] }>(
        `/movie/${movieId}/videos`
      );
      resolve(res.results);
    } catch (error) {
      reject(error);
    }
  });
};
