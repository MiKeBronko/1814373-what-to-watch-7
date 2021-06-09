import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const elFilmCardPreview = [
  {
    id: 1,
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    nameFilm: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: '',
    released: 2014,

  },
  {
    id: 2,
    previewImage: 'img/bohemian-rhapsody.jpg',
    nameFilm: 'Bohemian Rhapsody',
  },
  {
    id: 3,
    previewImage: 'img/macbeth.jpg',
    nameFilm: 'Macbeth',
  },
  {
    id: 4,
    previewImage: 'img/aviator.jpg',
    nameFilm: 'Aviator',
  },
  {
    id: 5,
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    nameFilm: 'We need to talk about Kevin',
  },
  {
    id: 6,
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    nameFilm: 'What We Do in the Shadows',
  },
  {
    id: 7,
    previewImage: 'img/revenant.jpg',
    nameFilm: 'Revenant',
  },
  {
    id: 8,
    previewImage: 'img/johnny-english.jpg',
    nameFilm: 'Johnny English',
  },
  {
    id: 9,
    previewImage: 'img/shutter-island.jpg',
    nameFilm: 'Shutter Island',
  },
  {
    id: 10,
    previewImage: 'img/pulp-fiction.jpg',
    nameFilm: 'Pulp Fiction',
  },
  {
    id: 11,
    previewImage: 'img/no-country-for-old-men.jpg',
    nameFilm: 'No Country for Old Men',
  },
  {
    id: 12,
    previewImage: 'img/snatch.jpg',
    nameFilm: 'Snatch',
  },
  {
    id: 13,
    previewImage: 'img/moonrise-kingdom.jpg',
    nameFilm: 'Moonrise Kingdom',
  },
  {
    id: 14,
    previewImage: 'img/seven-years-in-tibet.jpg',
    nameFilm: 'Seven Years in Tibet',
  },
  {
    id: 15,
    previewImage: 'img/midnight-special.jpg',
    nameFilm: 'Midnight Special',
  },
  {
    id: 16,
    previewImage: 'img/war-of-the-worlds.jpg',
    nameFilm: 'War of the Worlds',
  },
  {
    id: 17,
    previewImage: 'img/dardjeeling-limited.jpg',
    nameFilm: 'Dardjeeling Limited',
  },
  {
    id: 18,
    previewImage: 'img/orlando.jpg',
    nameFilm: 'Orlando',
  },
  {
    id: 19,
    previewImage: 'img/mindhunter.jpg',
    nameFilm: 'Mindhunter',
  },
];

const promoFilm = {
  titlePromoFilm: 'The Grand Budapest Hotel',
  genrePromoFilm: 'Drama',
  dateReleasePromoFilm: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      elFilmCardPreview = {elFilmCardPreview}
      promoFilm = {promoFilm}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
