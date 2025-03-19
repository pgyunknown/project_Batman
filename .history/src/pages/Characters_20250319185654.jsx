import { useContext } from "react";
import { CharDataContext } from "../data/CharContextData"; // Adjust path if necessary

const Characters = () => {
  const { coreCharacters } = useContext(CharDataContext);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {coreCharacters.map((char, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg bg-gray-100">
          <img src={char.image} alt={char.alias} className="w-full h-48 object-cover mb-2 rounded" />
          <h2 className="text-xl font-semibold">{char.name} ({char.alias})</h2>
          <p><strong>First Appearance:</strong> {char.firstAppearance}</p>
          <p><strong>Affiliations:</strong> {char.affiliation.join(", ")}</p>
          <p><strong>Abilities:</strong> {char.abilities.join(", ")}</p>
          <p><strong>Notable Storylines:</strong> {char.notableStorylines.join(", ")}</p>
          <p><strong>Iconic Quotes:</strong> {char.iconicQuotes.join(" | ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;
