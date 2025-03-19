import { useContext } from 'react';
import {CharDataContext} from '../data/CharContextData';

const Characters = () => {
  // Correct variable name
  const { coreCharacters } = useContext(CharDataContext);

  // Proper logging
  console.log(coreCharacters);

  if (!coreCharacters) {
    return <p>Loading...</p>; // Handle if data isn't available yet
  }

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 text-white bg-blue-400'>
      {coreCharacters.map((i, n) => (
        <div className='flex flex-col justify-around m-5 p-5 bg-black font-inter md:tracking-wider tracking-tight font-lighter border-[0.5px] border-black rounded-xl'>
          <img src='#' alt={ i.name} />
          <p key={n} className='mb-1'><span className='text-lg'>Name </span>: {i.name}</p>
          <p key={n}className='mb-1'><span className='text-lg'>Abilities </span>: {i.abilities}</p>
          <p key={n}className='mb-1'><span className='text-lg'>Iconic Quotes </span>: {i.iconicQuotes}</p>
          <p key={n}className='mb-1'><span className='text-lg'>Alias </span>: {i.alias}</p>
        </div>
        
      ))}
    </div>
  );
};

export default Characters;


