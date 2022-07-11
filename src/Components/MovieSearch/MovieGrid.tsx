import { Grid } from "@mui/material";
import MoviePreview from "./MovieCard";
import { useParams } from "react-router-dom";
// import { useSearchMovie } from "../../hooks/MovieAPIHooks";
import { MovieOverviewType } from "../../types/Movie.types";
import { useSearchMovie } from "../../hooks/MovieAPIHooks";

const MovieGrid = () => {
  const { query } = useParams();
  console.log("Loading page..");
  const movies: MovieOverviewType[] = useSearchMovie(query || "");

  console.log(movies);

  if (query === undefined) return <div>Please provide a query!</div>;

  if (movies == null) return <div>Loading...</div>;
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
