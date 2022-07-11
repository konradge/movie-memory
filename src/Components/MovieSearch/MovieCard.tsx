import { Typography } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMovie } from "../../hooks/MovieAPIHooks";
import { MovieOverviewType } from "../../types/Movie.types";
import CircularRating from "../CircularRating";
import ImageWithOverlay from "../ImageWithOverlay";
type Props = { movie: MovieOverviewType };

const MoviePreview = ({ movie }: Props) => {
  const navigate = useNavigate();
  const movieDetails = useGetMovie(movie.id ? movie.id : 0);

  console.log("Previewing movie: ");
  console.log(movie);

  return (
    <ImageWithOverlay
      // onMouseEnter={(e) => {
      //   console.log("enter");
      //   // TODO: Request movie info only if card was entered
      // }}
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
      height={400}
      src={movie.poster_path || undefined}
      overlay={
        <Fragment>
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
        </Fragment>
      }
    />
  );
};

export default MoviePreview;
