import { createContext, useContext } from "react";

export const CharContext = createContext();
const CharContextData = ({children}) => {
  const movies = [
  {
    "title": "Batman: The Movie",
    "year": 1966,
    "director": "Leslie H. Martinson",
    "type": "Live-Action",
    "poster": "public/Batman1966.jpg",
    "rating": 6.5,
    "trailer": "https://www.youtube.com/watch?v=ND3elxkPRZY"
  },
  {
    "title": "Batman",
    "year": 1989,
    "director": "Tim Burton",
    "type": "Live-Action",
    "poster": "public/Batman1989.jpg",
    "rating": 7.5,
    "trailer": "https://www.youtube.com/watch?v=dgC9Q0uhX70"
  },
  {
    "title": "Batman Returns",
    "year": 1992,
    "director": "Tim Burton",
    "type": "Live-Action",
    "poster": "public/BatmanReturns.jpg",
    "rating": 7.1,
    "trailer": "https://www.youtube.com/watch?v=Qxw3Q1NSD4c"
  },
  {
    "title": "Batman: Mask of the Phantasm",
    "year": 1993,
    "director": "Eric Radomski, Bruce Timm",
    "type": "Animated",
    "poster": "public/Batman_mask_of_the_phantasm.jpg",
    "rating": 7.8,
    "trailer": "https://www.youtube.com/watch?v=cCRuTxdG9uA"
  },
  {
    "title": "Batman Forever",
    "year": 1995,
    "director": "Joel Schumacher",
    "type": "Live-Action",
    "poster": "public/Batman_Forever_poster.png",
    "rating": 5.4,
    "trailer": "https://www.youtube.com/watch?v=ROLvjRB4E_Q"
  },
  {
    "title": "Batman & Robin",
    "year": 1997,
    "director": "Joel Schumacher",
    "type": "Live-Action",
    "poster": "public/Batman_&_Robin.jpg",
    "rating": 3.7,
    "trailer": "https://www.youtube.com/watch?v=eTmrOGzVAYQ"
  },
  {
    "title": "Batman Begins",
    "year": 2005,
    "director": "Christopher Nolan",
    "type": "Live-Action",
    "poster": "public/Batman_Begins.jpg",
    "rating": 8.2,
    "trailer": "https://www.youtube.com/watch?v=neY2xVmOfUM"
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "type": "Live-Action",
    "poster": "public/The_Dark_Knight.jpg",
    "rating": 9.0,
    "trailer": "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    "title": "The Dark Knight Rises",
    "year": 2012,
    "director": "Christopher Nolan",
    "type": "Live-Action",
    "poster": "public/Dark_knight_rises.jpg",
    "rating": 8.4,
    "trailer": "https://www.youtube.com/watch?v=g8evyE9TuYk"
  },
  {
    "title": "Batman v Superman: Dawn of Justice",
    "year": 2016,
    "director": "Zack Snyder",
    "type": "Live-Action",
    "poster": "public/Batman_v_Superman_Dawn_of_Justice.jpg",
    "rating": 6.4,
    "trailer": "https://www.youtube.com/watch?v=0WWzgGyAH6Y"
  },
  {
    "title": "The Lego Batman Movie",
    "year": 2017,
    "director": "Chris McKay",
    "type": "Animated",
    "poster": "public/The_Lego_Batman_Movie.jpg",
    "rating": 7.3,
    "trailer": "https://www.youtube.com/watch?v=h6DOpfJzmo0"
  },
  {
    "title": "Batman and Harley Quinn",
    "year": 2017,
    "director": "Sam Liu",
    "type": "Animated",
    "poster": "public/Batman_Harly_Queen.jpg",
    "rating": 5.9,
    "trailer": "https://www.youtube.com/watch?v=U5GqzBMnCjM"
  },
  {
    "title": "The Batman",
    "year": 2022,
    "director": "Matt Reeves",
    "type": "Live-Action",
    "poster": "public/The_Batman.jpg",
    "rating": 7.9,
    "trailer": "https://www.youtube.com/watch?v=mqqft2x_Aa4"
  }
];
  return (
    <CharContext.Provider value={}
  )
}

export default CharContextData