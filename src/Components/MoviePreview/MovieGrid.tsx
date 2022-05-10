import { Grid } from "@mui/material";
import React from "react";
import MoviePreview from "./MovieCard";
import { Movie } from "../../api/TMDB";

type Props = { movies: Movie[] };

const MovieGrid = ({ movies }: Props) => {
  return (
    <Grid container>
      {movies
        .sort((m, n) => (n.popularity || 0) - (m.popularity || 0))
        .map((m) => (
          <MoviePreview movie={m} />
        ))}
    </Grid>
  );
};

export default MovieGrid;
