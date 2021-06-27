import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import review from './mocks/review';

const promoFilm = {
  titlePromoFilm: 'The Grand Budapest Hotel',
  genrePromoFilm: 'Drama',
  dateReleasePromoFilm: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      // elFilmCardPreview = {elFilmCardPreview}
      promoFilm = {promoFilm}
      films = {films}
      review = {review}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
