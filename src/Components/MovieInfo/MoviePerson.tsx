import React from "react";
import { act } from "react-dom/test-utils";
import TMDB from "../../api/TMDB";
import { ActorType, CrewType, MoviePersonType } from "../../api/TMDB.types";

type Props = { crewPerson?: CrewType; actorPerson?: ActorType };

const MoviePerson = ({ crewPerson, actorPerson }: Props) => {
  if (crewPerson === undefined && actorPerson === undefined) {
    console.warn("Person must either be crew or actor");
    return null;
  }

  if (crewPerson !== undefined && actorPerson !== undefined) {
    console.warn("Person must not be crew and actor!");
    return null;
  }

  if (actorPerson === undefined) return <div>Crew</div>;

  return (
    <div>
      <h1>{actorPerson.name}</h1>
      <h3>{actorPerson.character}</h3>
      {actorPerson.profile_path && (
        <img src={TMDB.getImageURL(actorPerson.profile_path)} />
      )}
    </div>
  );
};

export default MoviePerson;
