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
    "iconicQuotes": ["It's not who I am underneath, but what I do that defines me."],
    "image": "public/BatmanDp.webp"
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
    "iconicQuotes": ["I am Catwoman. Hear me roar."],
    "image": "public/Catwoman.jpg"
  },
  {
    "name": "Joker",
    "alias": "Clown Prince of Crime",
    "firstAppearance": "Batman #1 (1940)",
    "affiliation": ["Gotham's criminal underworld"],
    "abilities": ["Criminal mastermind", "Chemistry and engineering", "Psychological manipulation", "High unpredictability"],
    "notableStorylines": ["The Killing Joke", "Death of the Family", "A Death in the Family"],
    "iconicQuotes": ["Why so serious?", "All it takes is one bad day."],
    "image": "public/Joker.jpg"
  },
  {
    "name": "Bane",
    "alias": "The Man Who Broke the Bat",
    "firstAppearance": "Batman: Vengeance of Bane #1 (1993)",
    "affiliation": ["League of Assassins"],
    "abilities": ["Superhuman strength (with Venom)", "Genius-level strategist", "Skilled hand-to-hand combatant"],
    "notableStorylines": ["Knightfall", "Bane of the Demon"],
    "iconicQuotes": ["I will break you, Batman."],
    "image": "public/Bane.jpg"
  },
  {
    "name": "Two-Face",
    "alias": "Harvey Dent",
    "firstAppearance": "Detective Comics #66 (1942)",
    "affiliation": ["Gotham's criminal underworld"],
    "abilities": ["Expert strategist", "Marksmanship", "Knowledge of the law"],
    "notableStorylines": ["The Long Halloween", "Dark Victory"],
    "iconicQuotes": ["Two minds are better than one."],
    "image": "public/TwoFace.jpg"
  },
  {
    "name": "Ra's al Ghul",
    "alias": "The Demon's Head",
    "firstAppearance": "Batman #232 (1971)",
    "affiliation": ["League of Assassins"],
    "abilities": ["Immortality (via Lazarus Pit)", "Master tactician", "Skilled martial artist"],
    "notableStorylines": ["Son of the Demon", "Birth of the Demon"],
    "iconicQuotes": ["Detective, join me, and we can save the world."],
    "image": "public/RaAlGhul.jpg"
  },
  {
    "name": "Harley Quinn",
    "alias": "Dr. Harleen Quinzel",
    "firstAppearance": "Batman: The Animated Series (1992)",
    "affiliation": ["Gotham's criminal underworld", "Suicide Squad"],
    "abilities": ["Psychiatric expertise", "Gymnastics", "Immunity to toxins"],
    "notableStorylines": ["Mad Love", "Harley Quinn: Breaking Glass"],
    "iconicQuotes": ["I'm not just a sidekick, puddin'."],
    "image": "public/HarleyQuinn.jpg"
  },
  {
    "name": "Scarecrow",
    "alias": "Dr. Jonathan Crane",
    "firstAppearance": "World's Finest Comics #3 (1941)",
    "affiliation": ["Gotham's criminal underworld"],
    "abilities": ["Expert in fear psychology", "Use of fear toxins"],
    "notableStorylines": ["Fear State", "As the Crow Flies"],
    "iconicQuotes": ["I am fear incarnate."],
    "image": "public/Scarecrow.jpg"
  },
  {
    "name": "Poison Ivy",
    "alias": "Pamela Isley",
    "firstAppearance": "Batman #181 (1966)",
    "affiliation": ["Gotham's criminal underworld", "Birds of Prey"],
    "abilities": ["Control over plants", "Toxic immunity", "Seductive manipulation"],
    "notableStorylines": ["Hush", "Cycle of Life and Death"],
    "iconicQuotes": ["Nature always wins."],
    "image": "public/PoisonIvy.jpg"
  }
];

  return (
    <CharDataContext.Provider value={{coreCharacters}}>
      {children}
    </CharDataContext.Provider>
  )
}

export default CharDataProvider