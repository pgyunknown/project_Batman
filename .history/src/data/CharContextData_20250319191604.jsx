import { createContext, useContext } from "react";

export const CharDataContext = createContext();
const CharDataProvider = ({ children }) => {

const coreCharacters = [
  {
    "name": "Bruce Wayne",
    "alias": "Batman",
    "firstAppearance": "Detective Comics #27 (1939)",
    "affiliation": ["Justice League", "Bat-Family"],
    "abilities": ["Peak human condition", "Martial arts master", "Genius-level intellect", "Expert detective", "High-tech gadgets"],
    "notableStorylines": ["Year One", "The Dark Knight Returns", "Hush", "The Killing Joke"],
    "iconicQuotes": ["I am vengeance. I am the night. I am Batman!", "It's not who I am underneath, but what I do that defines me."],
    "image": "public/Batman.jpg"
  },
  {
    "name": "Dick Grayson",
    "alias": "Robin / Nightwing",
    "firstAppearance": "Detective Comics #38 (1940)",
    "affiliation": ["Teen Titans", "Justice League", "Bat-Family"],
    "abilities": ["Master acrobat", "Skilled martial artist", "Leadership", "Expert detective"],
    "notableStorylines": ["The Judas Contract", "Batman: Prodigal", "Nightwing: Year One"],
    "iconicQuotes": ["Batman taught me everything except how to let someone else in."],
    "image": "public/Nightwing.jpg"
  },
  {
    "name": "Selina Kyle",
    "alias": "Catwoman",
    "firstAppearance": "Batman #1 (1940)",
    "affiliation": ["Bat-Family", "Gotham's criminal underworld"],
    "abilities": ["Expert thief", "Martial artist", "Agility and acrobatics", "Skilled whip user"],
    "notableStorylines": ["Hush", "Batman: Year One", "Catwoman: When in Rome"],
    "iconicQuotes": ["I am Catwoman. Hear me roar.", "We're both a little screwed up. Perfect for each other."],
    "image": "public/Catwoman.jpg"
  },
  {
    "name": "Joker",
    "alias": "Clown Prince of Crime",
    "firstAppearance": "Batman #1 (1940)",
    "affiliation": ["Injustice League"],
    "abilities": ["Criminal mastermind", "Chemistry expertise", "Skilled manipulator"],
    "notableStorylines": ["The Killing Joke", "Death in the Family", "Endgame"],
    "iconicQuotes": ["Why so serious?", "All it takes is one bad day."],
    "image": "public/Joker.jpg"
  },
  {
    "name": "Bane",
    "alias": "The Man Who Broke the Bat",
    "firstAppearance": "Batman: Vengeance of Bane #1 (1993)",
    "affiliation": ["Suicide Squad", "Secret Society of Super Villains"],
    "abilities": ["Superhuman strength", "Strategic genius", "Expert in hand-to-hand combat"],
    "notableStorylines": ["Knightfall", "Bane: Conquest", "Batman: Bane of the Demon"],
    "iconicQuotes": ["I will break you, Batman!"],
    "image": "public/Bane.jpg"
  }
];

  return (
    <CharDataContext.Provider value={{coreCharacters}}>
      {children}
    </CharDataContext.Provider>
  )
}

export default CharDataProvider