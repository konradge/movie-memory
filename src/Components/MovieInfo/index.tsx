import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TMDB from "../../api/TMDB";
import { MovieType } from "../../api/TMDB.types";
import Actors from "./Actors";
import AddMovieToWatchHistory from "./AddMovieToWatchHistory";
import MovieImages from "./MovieImages";
import MovieTrailer from "./MovieTrailer";
import "./style.css";
import WatchTimeline from "./WatchTimeline";

type Props = {};

const MovieInfo = ({}: Props) => {
  const id = Number(useParams().id);

  const movieInfo = TMDB.useGetMovieInfo(id);

  if (id === undefined) return <div>An error occured!</div>;

  if (movieInfo === null) return <div>Loading...</div>;
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Card variant="outlined" sx={{ width: "50%", display: "inline-block" }}>
          <CardContent>
            <Typography variant="h2">
              {movieInfo.title}
              {movieInfo.release_date &&
                `(${new Date(movieInfo.release_date).getFullYear()})`}
            </Typography>
            <Typography variant="body2">{movieInfo.overview}</Typography>
          </CardContent>
        </Card>
      </div>
      {/* <MovieImages movieId={id} /> */}
      <MovieTrailer movieId={id} />
      <Actors movieId={id} />
      <div className="div-beside-wrapper">
        <div></div>
        <WatchTimeline />
      </div>
      <div className="div-beside-wrapper">
        <div>
          <AddMovieToWatchHistory title={movieInfo.title} id={id} />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
