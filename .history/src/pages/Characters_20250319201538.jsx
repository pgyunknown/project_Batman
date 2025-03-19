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
    <div 
      key={n} 
      className='flex flex-col justify-around m-5 p-5 bg-black font-inter md:tracking-wider tracking-tight font-lighter border-[0.5px] border-gray-500 rounded-xl'
    >
      <img src='#' alt={i.image} className='mb-4' />
      <p className='mb-2 pb-2 border-b border-gray-500'>
        <span className='md:text-lg font-semibold'>Name</span>: {i.name}
      </p>
      <p className='mb-2 pb-2 border-b border-gray-500'>
        <span className='md:text-lg font-semibold'>Abilities</span>: {i.abilities.join(", ")}
      </p>
      <p className='mb-2 pb-2 border-b border-gray-500'>
        <span className='md:text-lg font-semibold'>Iconic Quotes</span>: {i.iconicQuotes.join(" / ")}
      </p>
      <p className='mb-2'>
        <span className='md:text-lg font-semibold'>Alias</span>: {i.alias}
      </p>
    </div>
  ))}
</div>

  );
};

export default Characters;


