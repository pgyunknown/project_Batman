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
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-white'>
      {coreCharacters.map((i, n) => (
        <div className='w-full h-1/2 bg-blue-400 flex flex-row'>
          <p key={n}>{i.name}</p>
          <p key={n}>{i.firstAppearance}</p>
          <p key={n}>{i.abilities}</p>
        </div>
        
      ))}
    </div>
  );
};

export default Characters;


