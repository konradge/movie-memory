import { typedFetch } from "./InternalAPI";

// Wrapper-Hook to request any TMDB-endpoint
const request = <T>(endpoint: string, query?: string) => {
  return new Promise<T>(async (resolve) => {
    try {
      const result = await typedFetch<T>(
        `https://api.themoviedb.org/3${endpoint}?api_key=${
          process.env["REACT_APP_TMDB_API_KEY"]
        }${query ? `&${query}` : ``}`
      );
      resolve(result);
    } catch (error) {
      console.log("An error occured!");
      // reject(error);
    }
  });
};

const TMDB = {
  request,
};

export default TMDB;
