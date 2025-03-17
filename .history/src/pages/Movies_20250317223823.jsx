import React from 'react'
import { MovieDataContext } from '../data/MoviesContextData';
import { useContext } from 'react';

const Movies = () => {
const { movies } = useContext(MovieDataContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
      {movies.map((i, n)=>(
        <div key={n} className='bg-black rounded-xl text-sm md:text-xl flex flex-col justify-around p-2 md:p-5'>
          <img src={i.poster} className='m-2 h-3/4 md:h-auto w-full rounded-xl'/>
          <h1 className='m-2'>{i.title} </h1>
          <p className='m-2'>{i.year}</p>
          <p className='m-2'>{i.type}</p>
          <p className='m-2'>⭐{i.rating}</p>
        </div>
      ))}
  </div>
  );
}

export default Movies