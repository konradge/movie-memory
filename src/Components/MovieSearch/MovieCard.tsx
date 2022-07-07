import { Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TMDB from "../../api/TMDB";
import { MovieOverviewType } from "../../api/TMDB.types";
import CircularRating from "../CircularRating";
import ImageWithOverlay from "../ImageWithOverlay";

type Props = { movie: MovieOverviewType };

const MoviePreview = ({ movie }: Props) => {
  const navigate = useNavigate();
  const movieDetails = TMDB.useGetMovieInfo(movie.id ? movie.id : 0);
  return (
    <ImageWithOverlay
      onMouseEnter={() => {
        console.log("enter");
        // TODO: Request movie info only if card was entered
      }}
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
      height={400}
      src={movie.poster_path ? TMDB.getImageURL(movie.poster_path) : undefined}
      overlay={
        <React.Fragment>
          <div>
            <Typography variant="h5">{movie.title}</Typography>
            {movie.release_date && (
              <Typography variant="body1">
                ({new Date(movie.release_date).getFullYear()})
              </Typography>
            )}
          </div>
          <div>{movieDetails && movieDetails.runtime} minutes</div>
          <CircularRating
            value={movie.vote_average ? movie.vote_average * 10 : 0}
          />
        </React.Fragment>
      }
    />
  );
};

export default MoviePreview;
