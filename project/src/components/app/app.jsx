import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

function App(props) {
  const {elFilmCardPreview} = props;
  const {titlePromoFilm} = props;
  const {genrePromoFilm} = props;
  const {dateReleasePromoFilm} = props;
  return (
    <MainScreen elFilmCardPreview = {elFilmCardPreview}
      titlePromoFilm = {titlePromoFilm}
      genrePromoFilm = {genrePromoFilm}
      dateReleasePromoFilm = {dateReleasePromoFilm}
    />
  );
}

App.propTypes = {
  elFilmCardPreview: PropTypes.array.isRequired,
  titlePromoFilm: PropTypes.string.isRequired,
  genrePromoFilm: PropTypes.string.isRequired,
  dateReleasePromoFilm: PropTypes.string.isRequired,
};

export default App;
