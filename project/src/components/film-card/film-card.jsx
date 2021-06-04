import React from 'react';
import PropTypes from 'prop-types';
function FilmCardPreview (props) {
  const {nameFilm} = props;
  const {previewImage} = props;
  // const {elFilmCardPreview} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={'/'}>{nameFilm}</a>
      </h3>
    </article>
  );
}

FilmCardPreview.propTypes = {
  // elFilmCardPreview: PropTypes.array.isRequired,
  nameFilm: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};
export default FilmCardPreview;
