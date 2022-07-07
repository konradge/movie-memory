import { Grid } from "@mui/material";
import React from "react";
import MoviePreview from "./MovieCard";
import TMDB from "../../api/TMDB";
import { useParams } from "react-router-dom";

const MovieGrid = () => {
  const { query } = useParams();
  const movies = TMDB.useSearchMovie(query || "");
  if (query === undefined) return <div>Please provide a query!</div>;

  if (movies == null) return <div>Loading...</div>;
  return (
    <Grid container>
      {movies.results
        .sort((m, n) => (n.popularity || 0) - (m.popularity || 0))
        .map((m) => (
          <MoviePreview key={m.id} movie={m} />
        ))}
    </Grid>
  );
};

export default MovieGrid;
