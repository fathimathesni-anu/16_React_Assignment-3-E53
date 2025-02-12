import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 const MovieCard = ({ movie }) => {
  return (
    <div className='col-1g-2 col-md-4 col-sm-6 mb-4'>
      <div className='card'>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className='card-img-top'
        />
        <div className='card-body'>
          <h5 className='card-title'>{movie.title}</h5>
          <p className='card-text'>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}; 

function Movielist() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d003d74b10d8c8b8f6eb6a0c8dc50888");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default Movielist