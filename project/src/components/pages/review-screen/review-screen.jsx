import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../elements/logo/logo';
import FormReview from '../../../hooks/form-review/form-review';
function ReviewScreen (props) {
  const { films } = props;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img  src={`${films[0].posterImage}`} alt={`${films[0].name}`} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{films[0].name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href={'/'} className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
              </div>
            </li>
            <li className="user-block__item">
              <a href={'/'} className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={`${films[0].posterImage}`} alt={`${films[0].name}`} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <FormReview />
      </div>
    </section>
  );
}

ReviewScreen.propTypes = {
  films: PropTypes.array.isRequired,
};

export default ReviewScreen;
