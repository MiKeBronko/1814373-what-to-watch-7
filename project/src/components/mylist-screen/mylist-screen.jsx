import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import  FilmCardPreview from '../film-card/film-card';
import Logo from '../logo/logo';

function MyListScreen (props) {
  const {elMyListFilmCardPreview}  = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to='/'>Sign out</Link>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {
            elMyListFilmCardPreview.map((film) =>
              <FilmCardPreview key={film.id} previewImage = {film.previewImage} nameFilm = {film.nameFilm}/>)
          }
        </div>
      </section>
      <footer className="page-footer">
        <Logo />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

MyListScreen.propTypes = {
  elMyListFilmCardPreview: PropTypes.array.isRequired,
};

export default MyListScreen;
