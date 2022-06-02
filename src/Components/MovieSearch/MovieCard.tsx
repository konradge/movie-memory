import { Circle } from "@mui/icons-material";
import { CircularProgress, Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TMDB, { MovieOverviewType, MovieType } from "../../api/TMDB";
import CircularRating from "../CircularRating";

import "./style.css";

type Props = { movie: MovieOverviewType };

const MoviePreview = ({ movie }: Props) => {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState<MovieType | null>(null);
  return (
    <div
      className="container"
      onMouseEnter={() => {
        (async () => {
          if (movie.id !== undefined && movieDetails === null) {
            const info = await TMDB.getMovieInfo(movie.id);
            setMovieDetails(info);
          }
        })();
      }}
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
    >
      {movie.poster_path ? (
        <img
          src={TMDB.image(movie.poster_path)}
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
        <div>{movieDetails?.runtime} minutes</div>
        <CircularRating
          value={movie.vote_average ? movie.vote_average * 10 : 0}
        />
      </div>
    </div>
  );
  // return (
  //   <Card style={{ width: 400 }} onClick={(e) => console.log(movie)}>
  //     <CardContent
  //       sx={{
  //         display: "flex",
  //         flexDirection: "row",
  //         height: 200,
  //       }}
  //     >
  //       <div>
  //         {movie.poster_path ? (
  //           <img src={TMDB.image(movie.poster_path)} height={200} />
  //         ) : (
  //           <Skeleton variant="rectangular" height={200} width={133} />
  //         )}
  //       </div>
  //       <div style={{ overflow: "hidden" }}>
  //         <div style={{ fontSize: 20 }}>
  //           {movie.title}
  //           {movie.release_date &&
  //             ` (${new Date(movie.release_date).getFullYear()})`}
  //         </div>
  //         <div>{movie.overview}</div>
  //       </div>
  //       <div style={{ width: 30, height: 200 }} />
  //     </CardContent>
  //     <CardActions style={{ alignItems: "center" }} disableSpacing>
  //       <IconButton
  //         onClick={() => {
  //           navigate(`/movie/${movie.id}`);
  //         }}
  //       >
  //         <InfoIcon />
  //       </IconButton>
  //       <IconButton>
  //         <AddCircleIcon />
  //       </IconButton>
  //     </CardActions>
  //   </Card>
  // );
};

export default MoviePreview;
