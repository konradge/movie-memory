import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TMDB from "../../api/TMDB";

type Props = {};

const MovieInfo = ({}: Props) => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState<any>();

  useEffect(() => {
    // Rerun the query to TMDB
    (async () => {
      if (id !== undefined) {
        const info = await TMDB.getMovieInfo(id);
        setMovieInfo(info);
      }
    })();
  }, [id]);

  return <div>{JSON.stringify(movieInfo)}</div>;
};

export default MovieInfo;
