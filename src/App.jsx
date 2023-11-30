import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Moviecard from "./Moviecard";

function App() {
  const API_KEY = "7d81660f";
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=";

  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");

  const fetchMovie = async (movieTitle) => {
    const response = await fetch(`${API_URL}${API_KEY}&s=${movieTitle}`);
    const data = await response.json();
    setMovies(data.Search);
    // console.log(movieTitle, data.Search);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <>
      <div className="app">
        <h1>Movie Base</h1>
        <div className="search">
          <input
            value={searchMovies}
            onChange={(e) => {
              setSearchMovies(e.target.value);
            }}
            type="text"
            placeholder="search movie"
          />
          <button onClick={() => fetchMovie(searchMovies)}>Search</button>
        </div>
        {
          movies?.length > 0 ? (<div className="container">
          {movies.map((movie, index) => (<Moviecard key={index} movie={movie} />))}
          </div>) : ( <div className="">No Movie Found</div> )
        }
      </div>
    </>
  );
}

export default App;
