import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const elFilmCardPreview = [
  {
    image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    image: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody',
  },
  {
    image: 'img/macbeth.jpg',
    name: 'Macbeth',
  },
  {
    image: 'img/aviator.jpg',
    name: 'Aviator',
  },
  {
    image: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin',
  },
  {
    image: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows',
  },
  {
    image: 'img/revenant.jpg',
    name: 'Revenant',
  },
  {
    image: 'img/johnny-english.jpg',
    name: 'Johnny English',
  },
  {
    image: 'img/shutter-island.jpg',
    name: 'Shutter Island',
  },
  {
    image: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction',
  },
  {
    image: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men',
  },
  {
    image: 'img/snatch.jpg',
    name: 'Snatch',
  },
  {
    image: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom',
  },
  {
    image: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet',
  },
  {
    image: 'img/midnight-special.jpg',
    name: 'Midnight Special',
  },
  {
    image: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds',
  },
  {
    image: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited',
  },
  {
    image: 'img/orlando.jpg',
    name: 'Orlando',
  },
  {
    image: 'img/mindhunter.jpg',
    name: 'Mindhunter',
  },
  // {
  //   image: 'img/midnight-special.jpg',
  //   name: 'Midnight Special',
  // },
];

const titlePromoFilm = 'The Grand Budapest Hotel';
const genrePromoFilm = 'Drama';
const dateReleasePromoFilm = '2014';

ReactDOM.render(
  <React.StrictMode>
    <App elFilmCardPreview = {elFilmCardPreview}
      titlePromoFilm = {titlePromoFilm}
      genrePromoFilm = {genrePromoFilm}
      dateReleasePromoFilm = {dateReleasePromoFilm}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
