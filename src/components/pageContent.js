import React, { useState, useEffect } from 'react';
import '../styles/pageContent.scss';

import axios from 'axios';

const MOVIE_API_KEY = "fb32e7ccaf6950120020e21e3110f427";


function PopularMovies() {
  const [TvData, setTvData] = useState([]);
  
  useEffect (() => {
    const movieURL = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&page=1`
    //  const movieURL = `https://api.themoviedb.org/3/trending/tv/day?api_key=${MOVIE_API_KEY}&page=1`
    //   const movieURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${MOVIE_API_KEY}&page=1`

    axios
      .get(movieURL)
      .then((res) => {
          setTvData(res.data.results);
          //console.log(res.data.results);
      }) 
      .catch(e => console.log('error while loading data', e));
    }, [])

    const renderData = () => {
  
    const imgUrl = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/`;

      return TvData.map(info => {
        return (
            <div className="column" key={info.id}>
              <div className="card">
                <p className="title">{info.name}</p>
                <div className="card-content">
                  <div className="card-image">
                    <figure className="image">
                      <img src={imgUrl+info.poster_path} alt="img" />
                    </figure>
                  </div>
                  <div className="card-text">
                    <div className="box">
                        <p>
                          {info.overview}
                        </p>
                      <span className="score">Score:</span>
                      <p className="vote">{info.vote_average}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
      }
    )}

  return (
    <>
    <div className="appContainer">
      <div className="row">
        {renderData()}
      </div>
    </div>
    </>
  )
}


export default PopularMovies;
