import { useGetMovieVideos } from "../../hooks/MovieAPIHooks";

type Props = { movieId: number };

function MovieTrailer({ movieId }: Props) {
  const videos = useGetMovieVideos(movieId);

  if (videos && videos.length !== 0) {
    const url = videos
      ?.filter((v) => v.type === "Trailer")
      .sort(
        (v, w) =>
          new Date(v.published_at).getTime() -
          new Date(w.published_at).getTime()
      )[0]?.key;
    console.log(url);
    return (
      <iframe
        src={`https://www.youtube.com/embed/${url}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default MovieTrailer;
