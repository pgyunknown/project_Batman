import React from 'react'
import { MovieDataContext } from '../data/MoviesContextData';
import { useContext } from 'react';

const Movies = () => {
const { movies } = useContext(MovieDataContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movie, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg text-white">
          <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-lg" />
          <h2 className="mt-2 text-lg font-bold">{movie.title}</h2>
          <p className="text-sm">{movie.year} - {movie.director}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies