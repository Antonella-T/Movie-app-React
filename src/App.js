import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Cards from '../../Movie-app-React/src/Cards';
import Header from '../../Movie-app-React/src/Header';
import Footer from '../../Movie-app-React/src/Footer';
import ScrollUp from './ScrollUp';

export default function App() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    const moviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=b9e04ffd5a10a79d0459e43247be7805&language=en-US&include_adult=false";

    fetch(moviesUrl)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
      });
  });

  return (
    <div className="App">
      <Header/>
      <main className="Container">
        <Cards movies={movies}/>
      </main>
      <ScrollUp/>
      <Footer/>
    </div>
  );
}

