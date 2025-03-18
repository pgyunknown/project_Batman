import React from 'react'
import { createContext } from 'react';
import App from '../App';

  export const MovieDataContext = createContext();

const MoviesDataProvider = ({ children }) => {
const movies = [
  {
    "title": "Batman: The Movie",
    "year": 1966,
    "director": "Leslie H. Martinson",
    "type": "Live-Action",
    "poster": "public/Batman1966.jpg",
    "rating": 6.5,
    "trailer": "https://youtu.be/TdG2V4vhPjg?si=4gb9nQj87XjFFF5h"
  },
  {
    "title": "Batman",
    "year": 1989,
    "director": "Tim Burton",
    "type": "Live-Action",
    "poster": "public/Batman1989.jpg",
    "rating": 7.5,
    "trailer": "https://youtu.be/dgC9Q0uhX70?si=pfMCoPX4PSPvW1a7"
  },
  {
    "title": "Batman Returns",
    "year": 1992,
    "director": "Tim Burton",
    "type": "Live-Action",
    "poster": "public/BatmanReturns.jpg",
    "rating": 7.1,
    "trailer": "https://youtu.be/repBHGIny0c?si=GtSZZTmQY5YuPTcJ"
  },
  {
    "title": "Batman: Mask of the Phantasm",
    "year": 1993,
    "director": "Eric Radomski, Bruce Timm",
    "type": "Animated",
    "poster": "public/Batman_mask_of_the_phantasm.jpg",
    "rating": 7.8,
    "trailer": "https://youtu.be/imtYrQEZ4H8?si=7nnq-efhg3wbCFPN"
  },
  {
    "title": "Batman Forever",
    "year": 1995,
    "director": "Joel Schumacher",
    "type": "Live-Action",
    "poster": "public/Batman_Forever_poster.png",
    "rating": 5.4,
    "trailer": "https://youtu.be/ROLvjRB4E_Q?si=qPgISb9PCPN-YFEI"
  },
  {
    "title": "Batman & Robin",
    "year": 1997,
    "director": "Joel Schumacher",
    "type": "Live-Action",
    "poster": "public/Batman_&_Robin.jpg",
    "rating": 3.7,
    "trailer": "https://youtu.be/vHoCb78b97A?si=Zfa3RYv36ES8baUg"
  },
  {
    "title": "Batman Begins",
    "year": 2005,
    "director": "Christopher Nolan",
    "type": "Live-Action",
    "poster": "public/Batman_Begins.jpg",
    "rating": 8.2,
    "trailer": "https://youtu.be/qHhHIbNuok8?si=1Gx6gT5VXzpfr3cm"
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "type": "Live-Action",
    "poster": "public/The_Dark_Knight.jpg",
    "rating": 9.0,
    "trailer": "https://youtu.be/EXeTwQWrcwY?si=jm1wxVJ8UWzOz0uy"
  },
  {
    "title": "The Dark Knight Rises",
    "year": 2012,
    "director": "Christopher Nolan",
    "type": "Live-Action",
    "poster": "public/Dark_knight_rises.jpg",
    "rating": 8.4,
    "trailer": "https://youtu.be/g8evyE9TuYk?si=w-kE5NZj5gE4Pf3f"
  },
  {
    "title": "Batman v Superman: Dawn of Justice",
    "year": 2016,
    "director": "Zack Snyder",
    "type": "Live-Action",
    "poster": "public/Batman_v_Superman_Dawn_of_Justice.jpg",
    "rating": 6.4,
    "trailer": "https://youtu.be/0WWzgGyAH6Y?si=v3P8qx-550BwJkFd"
  },
  {
    "title": "The Lego Batman Movie",
    "year": 2017,
    "director": "Chris McKay",
    "type": "Animated",
    "poster": "public/The_Lego_Batman_Movie.jpg",
    "rating": 7.3,
    "trailer": "https://youtu.be/zhIRbLHVD8o?si=ZEZxlmZ5Ggvd7l0j"
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
    <MovieDataContext.Provider value={{ movies }}>
      {children}
  </MovieDataContext.Provider>
  )
}



export default MoviesDataProvider