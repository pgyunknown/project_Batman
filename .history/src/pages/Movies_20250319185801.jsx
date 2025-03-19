// import React from 'react'
// import { MovieDataContext } from '../data/MoviesContextData';
// import { useContext } from 'react';

// const Movies = () => {
// const { movies } = useContext(MovieDataContext);

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white">
//       {movies.map((i, n)=>(
//         <div key={n} className='bg-black  rounded-xl text-sm md:text-xl flex flex-col justify-around p-2 md:p-5 font-inter tracking-wide'>
//           <img src={i.poster} className='border-[0.5px] border-white  w-full rounded-xl  '/>
//           <h1 className='m-2 flex md:justify-center text-base md:text-2xl'>{i.title} </h1>
//           <p className='m-1 md:m-2 md:text-xl'><span>Year: </span>{i.year}</p>
//           <p className='m-1 md:m-2 md:text-xl'><span>Rating: </span> {i.rating} ⭐</p>
//           <div class="flex justify-center">
//               <button class="text-sm md:text-xl md:w-1/2 flex justify-center items-center m-2 border-2 rounded-xl bg-white text-black mx-auto">
//                   <a href={i.trailer} target='_blank'>watch trailer</a>
//               </button>
//           </div>
//         </div>
//       ))}
//   </div>
//   );
// }

// export default Movies

import { useContext } from "react";
import { CharDataContext } from "../data/CharContextData"; // Adjust path if necessary

const Characters = () => {
  const { coreCharacters } = useContext(CharDataContext);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coreCharacters.map((char, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg bg-gray-100">
          <img src={char.image} alt={char.alias} className="w-full h-48 object-cover mb-2 rounded" />
          <h2 className="text-xl font-semibold">{char.name} ({char.alias})</h2>
          <p><strong>First Appearance:</strong> {char.firstAppearance}</p>
          <p><strong>Affiliations:</strong> {char.affiliation.join(", ")}</p>
          <p><strong>Abilities:</strong> {char.abilities.join(", ")}</p>
          <p><strong>Notable Storylines:</strong> {char.notableStorylines.join(", ")}</p>
          <p><strong>Iconic Quotes:</strong> {char.iconicQuotes.join(" | ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;
