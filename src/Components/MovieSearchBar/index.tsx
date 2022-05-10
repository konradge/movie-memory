import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import TMDB, { MovieOverviewType } from "../../api/TMDB";
import MovieGrid from "../MoviePreview/MovieGrid";

type Props = {};

const MovieSearchBar = (props: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MovieOverviewType[]>([]);

  useEffect(() => {
    // Rerun the query to TMDB
    (async () => {
      if (query === "") {
        setResults([]);
      } else {
        const res = await TMDB.searchMovie(query);
        setResults(res.results);
      }
    })();
  }, [query]);

  return (
    <div>
      <TextField onChange={(e) => setQuery(e.target.value)} />
      <div>
        <MovieGrid movies={results} />
      </div>
    </div>
  );
};

export default MovieSearchBar;
