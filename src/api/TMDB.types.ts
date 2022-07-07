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
  production_countries?: CountryType[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: CountryType[];
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

export interface CountryType {
  iso_3166_1?: string;
  name?: string;
}

export interface MovieImagesType {
  backdrops: { file_path: string }[];
  logos: { file_path: string }[];
  posters: { file_path: string }[];
}

export interface MoviePersonType {
  id: number;
  name: string;
  // Path to image
  profile_path: string | null;
}

export type ActorType = {
  type: "Actor";
  cast_id: string;
  character: string;
} & MoviePersonType;

export type CrewType = {
  type: "Crew";
  department: string;
  job: Job;
} & MoviePersonType;

type Job =
  | "Director"
  | "Producer"
  | "Writer"
  | "Casting"
  | "Costume Design"
  | "Foley Artist"
  | "Stunts"
  | "Production Design"
  | "Stunts"
  | "Unit Production Manager"
  | "Foley Mixer"
  | "Sound Effects Editor"
  | "Set Decoration"
  | string;

export type Credits = {
  id: number;
  cast: ActorType[];
  crew: CrewType[];
};

export type MovieVideo = { key: string; published_at: string; type: string };
