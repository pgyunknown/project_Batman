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
    "name": "Alfred Pennyworth",
    "alias": "Alfred",
    "firstAppearance": "Batman #16 (1943)",
    "affiliation": ["Bat-Family"],
    "abilities": ["Skilled medic", "Expert tactician", "Loyal butler", "Former intelligence agent"],
    "notableStorylines": ["Batman: Earth One", "Batman: Hush", "Pennyworth R.I.P."],
    "iconicQuotes": ["Some men just want to watch the world burn.", "I have buried enough members of the Wayne family."],
    "image": "public/Alfred.jpg"
  },
  {
    "name": "Barbara Gordon",
    "alias": "Batgirl / Oracle",
    "firstAppearance": "Detective Comics #359 (1967)",
    "affiliation": ["Birds of Prey", "Bat-Family"],
    "abilities": ["Hacking expertise", "Combat training", "Skilled investigator", "Photographic memory"],
    "notableStorylines": ["The Killing Joke", "Birds of Prey", "Batgirl: Year One"],
    "iconicQuotes": ["I don't have to prove myself to you. I'm Batgirl."],
    "image": "public/Batgirl.jpg"
  },
  {
    "name": "James Gordon",
    "alias": "Commissioner Gordon",
    "firstAppearance": "Detective Comics #27 (1939)",
    "affiliation": ["Gotham City Police Department", "Bat-Family"],
    "abilities": ["Skilled detective", "Leadership", "Strong moral compass"],
    "notableStorylines": ["Batman: Year One", "The Long Halloween", "Gotham Central"],
    "iconicQuotes": ["We may be on opposite sides, but we're not enemies."],
    "image": "public/Gordon.jpg"
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
  }
];

  return (
    <CharDataContext.Provider value={{coreCharacters}}>
      {children}
    </CharDataContext.Provider>
  )
}

export default CharDataProvider