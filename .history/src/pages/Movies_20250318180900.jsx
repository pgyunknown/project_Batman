import React from 'react'
import { MovieDataContext } from '../data/MoviesContextData';
import { useContext } from 'react';

const Movies = () => {
const { movies } = useContext(MovieDataContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
      {movies.map((i, n)=>(
        <div key={n} className='bg-black  rounded-xl text-sm md:text-xl flex flex-col justify-around p-2 md:p-5 font-inter tracking-wide'>
          <img src={i.poster} className='border-[0.5px] border-white  w-full rounded-xl  '/>
          <h1 className='m-2 flex md:justify-center text-base md:text-2xl'>{i.title} </h1>
          <p className='m-1 md:m-2 md:text-xl'><span>Year: </span>{i.year}</p>
          <p className='m-1 md:m-2 md:text-xl'><span>Rating: </span> {i.rating} ⭐</p>
          <button className='text-sm md:text-xl px-3 bg-white'>watch trailer</button>
        </div>
      ))}
  </div>
  );
}

export default Movies