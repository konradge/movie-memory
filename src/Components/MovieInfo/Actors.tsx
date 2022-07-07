import "react-responsive-carousel/lib/styles/carousel.min.css";
import TMDB from "../../api/TMDB";
import Actor from "./Actor";
import ImageCarousel from "./ImageCarousel";

type Props = { movieId: number };

const Actors = ({ movieId }: Props) => {
  const credits = TMDB.useGetMovieCredits(movieId);

  if (credits === null) return <div>Loading...</div>;

  return (
    <ImageCarousel
      children={credits.cast.map((c) => (
        <Actor key={c.id} actor={c} />
      ))}
    />
  );

  // return (
  //   <React.Fragment>
  //     <Carousel
  //       useKeyboardArrows
  //       centerMode
  //       centerSlidePercentage={10}
  //       autoFocus
  //       showIndicators={false}
  //       showThumbs={false}
  //       interval={2000}
  //     >
  //       {credits.cast
  //         .filter((c) => c.profile_path !== null)
  //         .map((c) => (
  //           <div>
  //             <img src={TMDB.getImageURL(c.profile_path || "")} width={100} />
  //             <p className="legend">
  //               {c.name} as {c.character}
  //             </p>
  //           </div>
  //         ))}
  //     </Carousel>
  //     <Carousel
  //       useKeyboardArrows
  //       centerMode
  //       centerSlidePercentage={10}
  //       autoFocus
  //       showIndicators={false}
  //       showThumbs={false}
  //       interval={2000}
  //     >
  //       {credits.crew
  //         .filter((c) => c.profile_path !== null)
  //         .map((c) => (
  //           <div>
  //             <img src={TMDB.getImageURL(c.profile_path || "")} width={100} />
  //             <p className="legend">
  //               {c.name} as {c.job}
  //             </p>
  //           </div>
  //         ))}
  //     </Carousel>
  //   </React.Fragment>
  // );
};

export default Actors;
