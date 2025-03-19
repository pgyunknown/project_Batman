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
        <div className='flex flex-col'>
          <img src='#' alt={ i.name} />
          <p key={n}>{i.name}</p>
          <p key={n}>{i.firstAppearance}</p>
          <p key={n}>{i.abilities}</p>
          <p key={n}>{i.iconicQuotes}</p>
        </div>
        
      ))}
    </div>
  );
};

export default Characters;


