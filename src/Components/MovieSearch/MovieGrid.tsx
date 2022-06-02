import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MoviePreview from "./MovieCard";
import TMDB, { MovieOverviewType } from "../../api/TMDB";
import { useParams } from "react-router-dom";

type Props = {};

const MovieGrid = ({}: Props) => {
  const { query } = useParams();
  const [movies, setMovies] = useState<MovieOverviewType[] | null>(null);
  useEffect(() => {
    (async () => {
      if (query !== undefined) {
        const mvs = await TMDB.searchMovie(query);
        setMovies(mvs.results);
      }
    })();
  });

  if (query === undefined) return <div>Please provide a query!</div>;
  if (movies === null) return <div>Loading...</div>;
  return (
    <Grid container>
      {movies
        .sort((m, n) => (n.popularity || 0) - (m.popularity || 0))
        .map((m) => (
          <MoviePreview key={m.id} movie={m} />
        ))}
    </Grid>
  );
};

export default MovieGrid;
