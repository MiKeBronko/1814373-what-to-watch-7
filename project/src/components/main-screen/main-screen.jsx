import React from 'react';
import PropTypes from 'prop-types';
import  FilmCardPreview from '../film-card/film-card';
function MainScreen (props) {
  const {elFilmCardPreview} = props;
  const {promoFilm} = props;
  // const {titlePromoFilm} = props;
  // const {genrePromoFilm} = props;
  // const {dateReleasePromoFilm} = props;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link" href={'/'}>
              <span className="logo__letter logo__letter--1" href={'/'}>W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href={'/'}>Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.titlePromoFilm}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genrePromoFilm}</span>
                <span className="film-card__year">{promoFilm.dateReleasePromoFilm}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href={'/'} className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Kids &amp; Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href={'/'} className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>
          <div className="catalog__films-list">

            {
              elFilmCardPreview.map((film) =>
                <FilmCardPreview key={film.id} previewImage = {film.previewImage} nameFilm = {film.nameFilm}/>)
            }


          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light" href={'/'}>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}


MainScreen.propTypes = {
  elFilmCardPreview: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
};

export default MainScreen;