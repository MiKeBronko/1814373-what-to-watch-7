import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

function App(props) {
  const {elFilmCardPreview} = props;
  const {promoFilm} = props;
  // debugger
  //   console.log(props);
  //   debugger
  // const {titlePromoFilm} = props;
  // const {genrePromoFilm} = props;
  // const {dateReleasePromoFilm} = props;
  return (
    <MainScreen elFilmCardPreview = {elFilmCardPreview}
      promoFilm = {promoFilm}
    />
  );
}

App.propTypes = {
  elFilmCardPreview: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
};

export default App;
