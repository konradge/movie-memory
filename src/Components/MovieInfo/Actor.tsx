import { Typography } from "@mui/material";
import { ActorType } from "../../types/Person.types";
import ImageWithOverlay from "../ImageWithOverlay";

type Props = { actor: ActorType };

const Actor = ({ actor }: Props) => {
  return (
    <ImageWithOverlay
      width={150}
      src={actor.profile_path || ""}
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
