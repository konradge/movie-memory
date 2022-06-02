import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWatchDates, addWatchDate } from "../../api/InternalAPI";
import TMDB, { MovieType } from "../../api/TMDB";
import Popup from "../../Popup";
import AddMovieToWatchHistory from "./AddMovieToWatchHistory";
import "./style.css";
import WatchTimeline from "./WatchTimeline";

type Props = {};

const MovieInfo = ({}: Props) => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState<MovieType | null>(null);

  useEffect(() => {
    // Rerun the query to TMDB
    (async () => {
      if (id !== undefined) {
        const info = await TMDB.getMovieInfo(id);
        setMovieInfo(info);
      }
    })();
  }, [id]);

  if (id === undefined) return <div>An error occured!</div>;

  if (movieInfo === null) return <div>Loading...</div>;
  return (
    <div>
      <div className="div-beside-wrapper">
        <div>
          hello
          {movieInfo.poster_path && (
            <img src={TMDB.image(movieInfo.poster_path)} />
          )}
        </div>
        <div>
          <h1>
            {movieInfo.title} (
            {movieInfo.release_date &&
              new Date(movieInfo.release_date).getFullYear()}
            )
          </h1>
          <div>{movieInfo.overview}</div>
        </div>
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
