export interface MoviePersonType {
  id: number;
  name: string;
  // Path to image of person
  profile_path: string | null;
}

export interface ActorType extends MoviePersonType {
  type: "Actor";
  cast_id: string;
  character: string;
}

export interface CrewType extends MoviePersonType {
  type: "Crew";
  department: string;
  job: JobType;
}

type JobType =
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
