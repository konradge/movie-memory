import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

type Props = {};

const MovieSearchBar = (props: Props) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div>
      <TextField
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" ? navigate(`/search/${query}`) : null
        }
        placeholder="Search for movie"
      />
    </div>
  );
};

export default MovieSearchBar;
