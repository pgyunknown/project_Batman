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
        <div className='flex flex-col justify-around m-5 p-5 bg-black font-inter md:tracking-wider '>
          <img src='#' alt={ i.name} />
          <p key={n} className='mb-1'><span className='font-bold'>Name: </span> {i.name}</p>
          <p key={n}className='mb-1'><span>Alias: </span> {i.alias}</p>
          <p key={n}className='mb-1'><span>Abilities: </span>{i.abilities}</p>
          <p key={n}className='mb-1'><span>Iconic quotes: </span>{i.iconicQuotes}</p>
        </div>
        
      ))}
    </div>
  );
};

export default Characters;


