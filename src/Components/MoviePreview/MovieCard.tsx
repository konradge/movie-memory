import {
  Box,
  Card,
  CardContent,
  CardActions,
  Skeleton,
  Button,
} from "@mui/material";
import React from "react";
import TMDB, { Movie } from "../../api/TMDB";

type Props = { movie: Movie };

const MoviePreview = ({ movie }: Props) => {
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
          <div style={{ fontSize: 20 }}>{movie.title}</div>
          <div>{movie.overview}</div>
        </div>
        <div style={{ width: 30, height: 200 }} />
      </CardContent>
    </Card>
  );
};

export default MoviePreview;
