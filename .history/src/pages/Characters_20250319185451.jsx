import { useContext } from 'react';
import CharDataContext from '../data/CharContextData';

const Characters = () => {
  // Correct variable name
  const { characters } = useContext(CharDataContext);

  // Proper logging
  console.log(characters);

  if (!characters) {
    return <p>Loading...</p>; // Handle if data isn't available yet
  }

  return (
    <div>
      {characters.map((i, n) => (
        <h1 key={n}>{i.name}</h1>
      ))}
    </div>
  );
};

export default Characters;
