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
    <div className='w-full'>
      {coreCharacters.map((i, n) => (
        <h1 key={n}>{i.name}</h1>
      ))}
    </div>
  );
};

export default Characters;


