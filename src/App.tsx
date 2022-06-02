import React from "react";
import Home from "./Components/Home";
import { Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";
import MovieInfo from "./Components/MovieInfo";
import MovieGrid from "./Components/MovieSearch/MovieGrid";

// const Router = () => {
//   const routes: RouteObject[] = [
//     {
//       path: "/",
//       element: <Home />,
//       children: [
//         {
//           path: "search",
//           element: <MovieSearch />,
//           children: [{ path: ":query", element: <MovieSearch /> }],
//         },
//         {
//           path: "movie",
//           element: <div>Movie</div>,
//           children: [
//             {
//               path: ":id",
//               element: <MovieInfo />,
//             },
//           ],
//         },
//       ],
//     },
//   ];
//   return useRoutes(routes);
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="search/:query" element={<MovieGrid />} />
          <Route path="movie/:id" element={<MovieInfo />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
