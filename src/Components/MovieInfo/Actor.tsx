import { Typography } from "@mui/material";
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
          <Typography variant="h6">{actor.name}</Typography>
          <Typography variant="body2">as</Typography>
          <Typography variant="body1">{actor.character}</Typography>
        </div>
      }
    />
  );
};

export default Actor;
