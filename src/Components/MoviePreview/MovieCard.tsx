import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Skeleton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import TMDB, { Movie } from "../../api/TMDB";
import { useNavigate } from "react-router-dom";

type Props = { movie: Movie };

const MoviePreview = ({ movie }: Props) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: 400 }} onClick={(e) => console.log(movie)}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          height: 200,
        }}
      >
        <div>
          {movie.poster_path ? (
            <img src={TMDB.image(movie.poster_path)} height={200} />
          ) : (
            <Skeleton variant="rectangular" height={200} width={133} />
          )}
        </div>
        <div style={{ overflow: "hidden" }}>
          <div style={{ fontSize: 20 }}>
            {movie.title}
            {movie.release_date &&
              ` (${new Date(movie.release_date).getFullYear()})`}
          </div>
          <div>{movie.overview}</div>
        </div>
        <div style={{ width: 30, height: 200 }} />
      </CardContent>
      <CardActions style={{ alignItems: "center" }} disableSpacing>
        <IconButton>
          <InfoIcon
            onClick={() => {
              navigate(`/movie/${movie.id}`);
            }}
          />
        </IconButton>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MoviePreview;
