import React from 'react';
import PropTypes from 'prop-types';
// const elFilmPreview = {
//       name: 'Fantastic Beasts: The Crimes of Grindelwald',
//   };
// const filmName = (elFilmPreview) => <a className="small-film-card__link" href="film-page.html">{elFilmPreview.name}</a>
function FilmCardPreview (props) {
  const {name} = props;
  const {image} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={'/'}>{name}</a>
      </h3>
    </article>
  );
}
// function Message  (props)  {
//   const {name = 'Stranger'} = props;
//   return (
//     <p>Hello, {name}.</p>
//   );
// }
FilmCardPreview.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default FilmCardPreview;
// export default Message;
