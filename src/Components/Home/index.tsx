import React from "react";
import { Outlet } from "react-router-dom";
import MovieSearchBar from "../MovieSearch/MovieSearchBar";

type Props = {};

export default (props: Props) => {
  return (
    <div>
      <MovieSearchBar />
      <Outlet />
    </div>
  );
};
