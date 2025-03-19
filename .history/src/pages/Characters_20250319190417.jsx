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
    <div className=''>
      {coreCharacters.map((i, n) => (
        <div className='bg-black  rounded-xl text-sm md:text-xl flex flex-col justify-around p-2 md:p-5 font-inter tracking-wide>
          <p key={n}>{i.name}</p>
          <p key={n}>{i.firstAppearance}</p>
          <p key={n}>{i.abilities}</p>
        </div>
        
      ))}
    </div>
  );
};

export default Characters;


