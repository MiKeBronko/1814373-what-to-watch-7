import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen () {
  return (
    <div className="page-content">
      <div className="film-card__wrap">
        <h1>404. Page not found</h1>
        <Link to='/'>Вернуться на главную страницу</Link>
      </div>
    </div>
  );
}

export default NotFoundScreen;
