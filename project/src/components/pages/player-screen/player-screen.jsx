import React from 'react';
import PropTypes from 'prop-types';

function PlayerScreen (props) {
  const { films } = props;
  return (
    <div  className="player">
      {/* { films.map((film, i) => {
        const keyValue= i//`${film.id}`;
        const curVideo = `${film.video}`;
        const curPoster= `${film.posterImage}`;
        console.log(keyValue, curVideo, curPoster);
        return (
          <video  src= {curVideo}  className="player__video" poster = {curPoster}/>
          )
        })
      } */}
      <video  src= {`${films[0].videoLink}`}  className="player__video" poster = {`${films[0].previewImage}`}/>
      <button type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

PlayerScreen.propTypes = {
  films: PropTypes.array.isRequired,
};

export default PlayerScreen;
