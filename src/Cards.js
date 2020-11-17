import React from 'react';

const IMAGE_URL = "https://image.tmdb.org/t/p/w780/";

function Cards({ movies }) {
  return(
    <div className="CardsContainer">
      { movies.map((movie) => {
        return (  
          <div className="Cards">
            <img src={ `${IMAGE_URL}${movie.backdrop_path}` } alt="movie banner"/>
            <div className="CardTextArea">
              <h2>{ movie.title }</h2>
              <p>{ movie.overview }</p>
            </div>
          </div>
        )
      }) }
    </div>

)}

export default Cards;