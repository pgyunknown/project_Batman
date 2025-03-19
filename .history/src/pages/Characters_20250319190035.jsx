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
    <div>
      {coreCharacters.map((i, n) => (
        <div className='w-full h-1/2 bg-blue-400'>
          <h1 key={n}>{i.name}</h1>
        </div>
        
      ))}
    </div>
  );
};

export default Characters;


