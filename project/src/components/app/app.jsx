import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login';
import MyListScreen from '../mylist-screen/mylist-screen';
import FilmScreen from '../film-screen/film-screen';
import PlayerScreen from '../player-screen/player-screen';
import ReviewScreen from '../review-screen/review-screen';
import NotFoundScreen from '../404-screen/404-screen';


function App(props) {
  const {elFilmCardPreview, promoFilm} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen elFilmCardPreview = {elFilmCardPreview} promoFilm = {promoFilm}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen/>
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyListScreen elFilmCardPreview = {elFilmCardPreview}/>
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmScreen elFilmCardPreview = {elFilmCardPreview}/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen/>
        </Route>
        <Route exact path={AppRoute.ADDREVIEW}>
          <ReviewScreen/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  elFilmCardPreview: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
};

export default App;
