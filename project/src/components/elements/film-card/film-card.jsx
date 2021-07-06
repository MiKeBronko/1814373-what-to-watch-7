import React from 'react';
import {Link} from 'react-router-dom';
import filmCardPropTypes from './film-card.prop';

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
        <Link className="small-film-card__link" to={`films/${id}`}>{name}
        </Link>
      </h3>
    </article>
  );
}

FilmCardPreview.propTypes = filmCardPropTypes;
export default FilmCardPreview;
