import React from 'react';
import PropTypes from 'prop-types';

function FilmCardPreview (props) {
  const {film,  onMouseOver} = props;
  const {name, id, previewImage} = film;
  // const {elFilmCardPreview} = props;

  // const clickHandler = (evt) => console.log('click', evt);
  const handler = () => { onMouseOver(id); };
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={handler}>
      <div className="small-film-card__image">
        <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={'/'}>{name}</a>
      </h3>
    </article>
  );
}

const filmPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
}

export const filmCardPropTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  onMouseOver: PropTypes.func.isRequired
}

FilmCardPreview.propTypes = filmCardPropTypes
export default FilmCardPreview;
