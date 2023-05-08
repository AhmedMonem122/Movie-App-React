import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchPageQuery, setSearchPageQuery] = useState("");

  // Get All Movies
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=2dc4f3b7280c70e5009487448e8c74f4"
    );

    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Search Movies
  const searchMovies = async (query) => {
    if (query === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2dc4f3b7280c70e5009487448e8c74f4&query=${query}`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
      searchPageQuery(query);
    }
  };

  // Get Current Page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=2dc4f3b7280c70e5009487448e8c74f4`
    );

    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Get Search Pages
  const getSearchPages = async (page = 1, query = "") => {
    if (query !== "") {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2dc4f3b7280c70e5009487448e8c74f4&page=${page}&query=${query}`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);

      setSearchPageQuery(query);
    } else if (query === "") {
      setSearchPageQuery("");
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        searchMovies,
        getPage,
        pageCount,
        getSearchPages,
        setSearchPageQuery,
        searchPageQuery,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const MovieContext = createContext();

export default MovieProvider;
