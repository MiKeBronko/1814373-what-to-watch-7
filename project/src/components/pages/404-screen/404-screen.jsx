import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen () {
  return (
    <div style={{display: 'flex','flex-direction':'column', 'align-items':'center' ,width: '500px', margin:'0 auto'}}>
      <img style = {{width: '300px', height: '300px'}} src="img/filmstrip.png" alt="film strip" />
      <h1>404. Page not found</h1>
      <Link to='/'>Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFoundScreen;
