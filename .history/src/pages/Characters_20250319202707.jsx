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
<div className='grid md:grid-cols-2 lg:grid-cols-4 shrink-0 grid-cols-1 gap-4 text-white bg-blue-400'>
  {coreCharacters.map((i, n) => (
    <div 
  key={n} 
  className='flex flex-col justify-around m-2 lg:m-3 p-4 lg:p-3 bg-black font-inter md:tracking-wider tracking-tight font-lighter border-[0.5px] border-gray-500 rounded-xl lg:h-[40vh] h-lvh'
>
  <img src={i.image} className='mb-4 w-full h-1/2 object-cover' />
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


  );
};

export default Characters;


