import React from 'react'
import { MovieDataContext } from '../data/MoviesContextData';
import { useContext } from 'react';

const Movies = () => {
const { movies } = useContext(MovieDataContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
      {movies.map((i, n)=>(
        <div key={n} className='bg-black rounded-xl flex flex-col justify-around '>
          <img src={i.poster} className='h-3/5 rounded-xl'/>
          <h1>{i.title}</h1>
          <p>{i.year}</p>
          <p>{i.type}</p>
          <p>⭐{i.rating}</p>
        </div>
      ))}
  </div>
  );
}

export default Movies