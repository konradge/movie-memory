import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useGetMovieImages } from "../../hooks/MovieAPIHooks";

type Props = { movieId: number };

const MovieImages = ({ movieId }: Props) => {
  const imgs = useGetMovieImages(movieId);
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
        {imgs.backdrops.map((url) => (
          <div key={url}>
            <img alt={url} src={url} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieImages;
