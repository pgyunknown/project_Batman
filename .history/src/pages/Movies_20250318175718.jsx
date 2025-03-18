import React from 'react'
import { MovieDataContext } from '../data/MoviesContextData';
import { useContext } from 'react';

const Movies = () => {
const { movies } = useContext(MovieDataContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
      {movies.map((i, n)=>(
        <div key={n} className='bg-black rounded-xl text-sm md:text-xl flex flex-col justify-around p-2 md:p-5 font-inter tracking-wider'>
          <img src={i.poster} className='  w-full rounded-xl '/>
          <h1 className='m-2'>{i.title} </h1>
          <h1 className='m-2'>{i.director} </h1>
          <p className='md:m-2'> {i.year}</p>
          <p className='md:m-2'>{ i.rating} ⭐</p>
        </div>
      ))}
  </div>
  );
}

export default Movies