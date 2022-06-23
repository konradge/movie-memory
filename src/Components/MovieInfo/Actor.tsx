import React from "react";
import TMDB from "../../api/TMDB";
import { ActorType } from "../../api/TMDB.types";
import ImageWithOverlay from "../ImageWithOverlay";

type Props = { actor: ActorType };

const Actor = ({ actor }: Props) => {
  return (
    <ImageWithOverlay
      width={150}
      src={TMDB.getImageURL(actor.profile_path || "")}
      overlay={
        <div>
          <div style={{ fontWeight: "bold" }}>{actor.name}</div> as{" "}
          {actor.character}
        </div>
      }
    />
  );
};

export default Actor;
