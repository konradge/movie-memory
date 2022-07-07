import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import TMDB from "../../api/TMDB";

type Props = { movieId: number };

const MovieImages = ({ movieId }: Props) => {
  const imgs = TMDB.useGetMovieImages(movieId);
  console.log(imgs);

  if (imgs === null) return <div>Loading</div>;
  return (
    <div style={{ alignItems: "center" }}>
      <Carousel
        useKeyboardArrows
        centerMode
        centerSlidePercentage={50}
        autoPlay
        infiniteLoop
        autoFocus
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        {imgs.backdrops.map((i) => (
          <div key={i.file_path}>
            <img alt={i.file_path} src={TMDB.getImageURL(i.file_path)} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieImages;
