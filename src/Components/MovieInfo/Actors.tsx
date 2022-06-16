import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { createWatchCompilerHost } from "typescript";
import TMDB from "../../api/TMDB";
import MoviePerson from "./MoviePerson";

type Props = { movieId: number };

const Actors = ({ movieId }: Props) => {
  const credits = TMDB.useGetMovieCredits(movieId);

  if (credits === null) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Carousel
        useKeyboardArrows
        centerMode
        centerSlidePercentage={10}
        autoFocus
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        {credits.cast
          .filter((c) => c.profile_path !== null)
          .map((c) => (
            <div>
              <img src={TMDB.getImageURL(c.profile_path || "")} width={100} />
              <p className="legend">
                {c.name} as {c.character}
              </p>
            </div>
          ))}
      </Carousel>
      <Carousel
        useKeyboardArrows
        centerMode
        centerSlidePercentage={10}
        autoFocus
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        {credits.crew
          .filter((c) => c.profile_path !== null)
          .map((c) => (
            <div>
              <img src={TMDB.getImageURL(c.profile_path || "")} width={100} />
              <p className="legend">
                {c.name} as {c.job}
              </p>
            </div>
          ))}
      </Carousel>
    </React.Fragment>
  );
};

export default Actors;