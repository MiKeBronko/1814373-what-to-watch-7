import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainScreen from '../pages/main-screen/main-screen';
import LoginScreen from '../pages/login-screen/login';
import MyListScreen from '../pages/mylist-screen/mylist-screen';
import FilmScreen from '../pages/film-screen/film-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import ReviewScreen from '../pages/review-screen/review-screen';
import NotFoundScreen from '../pages/404-screen/404-screen';
import FilmsList from '../pages/films-list-screen/films-list-screen';

// import films from '../../mocks/films';
// import review from '../../mocks/review';
// import filmsProp from '../film-screen/film.prop';
// import reviewProp from '../review-screen/review.prop';

function App(props) {
  // const {elFilmCardPreview, promoFilm} = props;
  const {promoFilm} = props;
  const {films, review} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          {/* <MainScreen elFilmCardPreview = {elFilmCardPreview} promoFilm = {promoFilm}/> */}
          <MainScreen films = {films} promoFilm = {promoFilm}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen/>
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          {/* <MyListScreen elFilmCardPreview = {elFilmCardPreview}/> */}
          <MyListScreen films = {films}/>
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmScreen films = {films}/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen films = {films}/>
        </Route>
        <Route exact path={AppRoute.ADDREVIEW}>
          <ReviewScreen review={review}/>
        </Route>
        <Route exact path={AppRoute.DEVFILMSLIST}>
          <FilmsList films = {films}/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  // elFilmCardPreview: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  review: PropTypes.array.isRequired,
};

export default App;
