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
import FilmsList from '../../hooks/films-list/films-list';
// import filmCardPropTypes from '../elements/film-card/film-card.prop';
import filmPropTypes from '../elements/film-card/film-card.prop';


function App(props) {
  const {films, review, promo} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          {/* <MainScreen elFilmCardPreview = {elFilmCardPreview} promoFilm = {promoFilm}/> */}
          <MainScreen films = {films} promo = { promo }/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen/>
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          {/* <MyListScreen elFilmCardPreview = {elFilmCardPreview}/> */}
          <MyListScreen films = {films}/>
        </Route>
        <Route exact path={'/films/:id'}>
          {/* <Route exact path={AppRoute.FILM}> */}
          <FilmScreen films = {films}/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen films = {films}/>
        </Route>
        <Route exact path={AppRoute.ADDREVIEW}>
          <ReviewScreen films = {films} review={review}/>
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
  promo: PropTypes.arrayOf(filmPropTypes).isRequired,
  films: PropTypes.arrayOf(filmPropTypes),
  review: PropTypes.array.isRequired,
};

export default App;
