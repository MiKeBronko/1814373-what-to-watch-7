import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import FilmCardPreview from '../../components/elements/film-card/film-card';

function Films (props) {
  const { films } = props;
  const [state, setState] = useState(null);
  const mouseOverHandler = () => {
    // console.log('mouse over', filmId);
    // console.log('state', state);
    // console.log('setState', setState);
    setState(state);
  };
  return (
    <div className="catalog__films-list">
      {
        films.map((film) => (
          <FilmCardPreview
            key={film.id}
            // id={film.id}
            film={film}
            onMouseOver={mouseOverHandler}
            // previewImage={film.previewImage} nameFilm={film.nameFilm}
          />),
        )
      }
    </div>);
}

Films.propTypes = {
  films: PropTypes.array.isRequired,
};

export default Films;
