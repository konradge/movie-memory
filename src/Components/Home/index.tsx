import React from "react";
import { Outlet } from "react-router-dom";
import MovieSearchBar from "../MovieSearch/MovieSearchBar";

type Props = {};
const Home = (props: Props) => {
  return (
    <div>
      <MovieSearchBar />
      <Outlet />
    </div>
  );
};

export default Home;
