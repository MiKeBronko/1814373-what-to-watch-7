import React from 'react';
import PropTypes from 'prop-types';
import FilmCardPreview from '../film-card/film-card';

function FilmsList (props) {
  // const [activeFilm, setActiveFilm] = useState(false);
  const {films} = props;
  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {
            films.map((film) =>
              <FilmCardPreview key={film.id} previewImage = {film.previewImage} nameFilm = {film.nameFilm}/>)
          }
        </div>
      </section>
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
