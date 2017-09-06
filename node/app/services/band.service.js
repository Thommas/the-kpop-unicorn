/**
 * The Kpop Unicorn
 *
 * Services - Band
 *
 * @module services/band
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const _ = require('lodash');
const spotifyService = require('./spotify.service.js');

const STATIC_BANDS_DATA = [
  {
    'title': 'Big Bang'
  },
  {
    'title': 'BTS'
  },
  {
    'title': 'Twice',
  },
  {
    'title': 'SNSD',
  },
  {
    'title': 'Red Velvet',
  },
  {
    'title': 'Got7',
  },
  {
    'title': 'Exo',
  },
  {
    'title': 'FTIsland',
  },
  {
    'title': 'Blackpink',
  },
  {
    'title': 'Mamamoo',
  },
  {
    'title': '비스트',
  },
  {
    'title': 'TVXQ',
  },
  {
    'title': 'APink',
  },
  {
    'title': 'GFriend',
  },
  {
    'title': 'Infinite',
  },
  {
    'title': 'Monsta X',
  }
];

/**
 * Retrieve bands
 */
exports.getBands = () => {
  const promises = [];
  _.forEach(STATIC_BANDS_DATA, (artist) => {
    promises.push(spotifyService.getArtist(artist.title));
  });
  return Promise.all(promises);
}
