import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import review from './mocks/review';
import promo from './mocks/promo';

ReactDOM.render(
  <React.StrictMode>
    <App
      // elFilmCardPreview = {elFilmCardPreview}
      films = {films}
      review = {review}
      promo = {promo}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
