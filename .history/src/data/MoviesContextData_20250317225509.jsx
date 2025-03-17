import React from 'react'
import { createContext } from 'react';
import App from '../App';

  export const MovieDataContext = createContext();

const MoviesDataProvider = ({ children }) => {
  const movies=  [
    {
      "title": "Batman: The Movie",
      "year": 1966,
      "director": "Leslie H. Martinson",
      "type": "Live-Action",
      "poster": "public/Batman1966.jpg",
      "rating": 6.5
    },
    {
      "title": "Batman",
      "year": 1989,
      "director": "Tim Burton",
      "type": "Live-Action",
      "poster": "public/Batman1989.jpg",
      "rating": 7.5
    },
    {
      "title": "Batman Returns",
      "year": 1992,
      "director": "Tim Burton",
      "type": "Live-Action",
      "poster": "public/BatmanReturns.jpg",
      "rating": 7.1
    },
    {
      "title": "Batman: Mask of the Phantasm",
      "year": 1993,
      "director": "Eric Radomski, Bruce Timm",
      "type": "Animated",
      "poster": "public/Batman_mask_of_the_phantasm.jpg",
      "rating": 7.8
    },
    {
      "title": "Batman Forever",
      "year": 1995,
      "director": "Joel Schumacher",
      "type": "Live-Action",
      "poster": "public/Batman_Forever_poster.png",
      "rating": 5.4
    },
    {
      "title": "Batman & Robin",
      "year": 1997,
      "director": "Joel Schumacher",
      "type": "Live-Action",
      "poster": "public/Batman_&_Robin.jpg",
      "rating": 3.7
    },
    {
      "title": "Batman Begins",
      "year": 2005,
      "director": "Christopher Nolan",
      "type": "Live-Action",
      "poster": "https://m.media-amazon.com/images/I/51k0qaipXlL._AC_.jpg",
      "rating": 8.2
    },
    {
      "title": "The Dark Knight",
      "year": 2008,
      "director": "Christopher Nolan",
      "type": "Live-Action",
      "poster": "https://m.media-amazon.com/images/I/51k0qaipXlL._AC_.jpg",
      "rating": 9.0
    },
    {
      "title": "The Dark Knight Rises",
      "year": 2012,
      "director": "Christopher Nolan",
      "type": "Live-Action",
      "poster": "https://m.media-amazon.com/images/I/51k0qaipXlL._AC_.jpg",
      "rating": 8.4
    },
    {
      "title": "Batman v Superman: Dawn of Justice",
      "year": 2016,
      "director": "Zack Snyder",
      "type": "Live-Action",
      "poster": "https://m.media-amazon.com/images/I/51k0qaipXlL._AC_.jpg",
      "rating": 6.4
    },
    {
      "title": "The Lego Batman Movie",
      "year": 2017,
      "director": "Chris McKay",
      "type": "Animated",
      "poster": "https://m.media-amazon.com/images/I/51k0qaipXlL._AC_.jpg",
      "rating": 7.3
    },
    {
      "title": "Batman and Harley Quinn",
      "year": 2017,
      "director": "Sam Liu",
      "type": "Animated",
      "poster": "https://m.media-amazon.com/images/I/51k0qaipXlL._AC_.jpg",
      "rating": 5.9
    },
    {
      "title": "The Batman",
      "year": 2022,
      "director": "Matt Reeves",
      "type": "Live-Action",
      "poster": "https://m.media-amazon.com/images/I/51k0qaipXlL._AC_.jpg",
      "rating": 7.9
    }
  ]

  return (
    <MovieDataContext.Provider value={{ movies }}>
      {children}
  </MovieDataContext.Provider>
  )
}



export default MoviesDataProvider