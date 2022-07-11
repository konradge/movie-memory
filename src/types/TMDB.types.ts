import { ActorType, CrewType } from "./Person.types";

export interface MovieImagesType {
  backdrops: { file_path: string }[];
  logos: { file_path: string }[];
  posters: { file_path: string }[];
}

export type Credits = {
  id: number;
  cast: ActorType[];
  crew: CrewType[];
};
