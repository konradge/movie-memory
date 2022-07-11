export type MovieIdType = number;

/**
 * Gives a short overview over a movie
 */
export interface MovieOverviewType {
  id: MovieIdType;
  title?: string;
  /** Path to the movie's poster (https://image.tmdb.org/t/p/w500/poster_path) */
  poster_path?: string | null;
  /** Short description of the movie */
  overview?: string | null;
  release_date?: string;
  /** Popularity of the movie, for example based on interactions */
  popularity?: number;
  /** Average vote (0.5-10) to the movie */
  vote_average?: number;
  //   adult?: boolean;
  //   genre_ids?: number[];
  //   original_title?: string;
  //   original_language?: string;
  //   backdrop_path?: string | null;
  //   video?: boolean;
  //   vote_count?: number;
}

// interface CountryType {
//   iso_3166_1?: string;
//   name?: string;
// }

/**
 * Production-status of the movie
 */
// type MovieStatusType =
//   | "Rumored"
//   | "Planned"
//   | "In Production"
//   | "Post Production"
//   | "Released"
//   | "Canceled";

/**
 * Information on a movie production company
 */
// type ProductionCompanyType = {
//   name?: string;
//   id?: number;
//   logo_path?: string | null;
//   origin_country?: string;
// };

/**
 * Gives some more information on the movie
 */
export interface MovieDetailsType extends MovieOverviewType {
  /** Runtime of the movie (in minutes) */
  runtime?: number | null;
  //   belongs_to_collection?: null | Object;
  //   budget?: number;
  //   genres?: { id?: number; name?: string }[];
  //   homepage?: string | null;
  //   imdb_id?: string | null;
  //   production_companies?: ProductionCompanyType[];
  //   production_countries?: CountryType[];
  //   revenue?: number;
  //   spoken_languages?: CountryType[];
  //   status?: MovieStatusType;
  //   tagline?: string | null;
}
