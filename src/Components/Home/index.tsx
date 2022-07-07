import { Outlet } from "react-router-dom";
import MovieSearchBar from "../MovieSearch/MovieSearchBar";

const Home = () => {
  return (
    <div>
      <MovieSearchBar />
      <Outlet />
    </div>
  );
};

export default Home;
