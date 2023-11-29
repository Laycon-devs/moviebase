import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

function App() {
  const API_KEY = "7d81660f";
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=";
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  // };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="app">
      <h1>MovieBase</h1>

      <div className="search">
        <input
        value={search}
          type="text"
          placeholder="search for movies"
          onChange={(e) => {setSearch(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {fetchMovies(search)}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
