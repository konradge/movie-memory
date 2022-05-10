import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieInfo from "./Components/MovieInfo";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
