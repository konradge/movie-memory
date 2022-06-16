import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TMDB from "../../api/TMDB";
import { MovieOverviewType } from "../../api/TMDB.types";
import CircularRating from "../CircularRating";

import "./style.css";

type Props = { movie: MovieOverviewType };

const MoviePreview = ({ movie }: Props) => {
  const navigate = useNavigate();
  const movieDetails = TMDB.useGetMovieInfo(movie.id ? movie.id : 0);
  return (
    <div
      className="container"
      onMouseEnter={() => {
        console.log("enter");
        // TODO: Request movie info only if card was entered
      }}
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
    >
      {movie.poster_path ? (
        <img
          src={TMDB.getImageURL(movie.poster_path)}
          height={400}
          className="image"
        />
      ) : (
        <Skeleton variant="rectangular" height={400} width={266} />
      )}
      <div className="overlay">
        <div>
          {movie.title}
          {movie.release_date &&
            ` (${new Date(movie.release_date).getFullYear()})`}
        </div>
        <div>{movieDetails && movieDetails.runtime} minutes</div>
        <CircularRating
          value={movie.vote_average ? movie.vote_average * 10 : 0}
        />
      </div>
    </div>
  );
};

export default MoviePreview;
