/**
 * The Kpop Unicorn
 *
 * Services - Band
 *
 * @module services/band
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const _ = require('lodash');
const cacheService = require('./cache.service.js');
const spotifyService = require('./spotify.service.js');
const twitterService = require('./twitter.service.js');
const nautiljonService = require('./nautiljon.service.js');

const CACHED_BANDS_KEY = 'cached_bands';
const CACHED_BAND_KEY = 'cached_band';

const STATIC_BANDS_DATA = [
  {
    'title': 'Big Bang',
    'slug': 'big-bang',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'BTS',
    'slug': 'bts',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'Twice',
    'slug': 'twice',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'SNSD',
    'slug': 'snsd',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'Red Velvet',
    'slug': 'red-velvet',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'Got7',
    'slug': 'got7',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'Exo',
    'slug': 'exo',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'FTIsland',
    'slug': 'ftisland',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'Blackpink',
    'slug': 'blackpink',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'Mamamoo',
    'slug': 'mamamoo',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': '비스트',
    'slug': 'beast',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'TVXQ',
    'slug': 'tvxq',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'APink',
    'slug': 'apink',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'GFriend',
    'slug': 'gfriend',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'Infinite',
    'slug': 'infinite',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  },
  {
    'title': 'Monsta X',
    'slug': 'monsta-x',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html'
  }
];

/**
 * Retrieve bands
 */
exports.getBands = (sort) => {
  const cacheKey = `${CACHED_BANDS_KEY}_${sort}`;
  const cachedBands = cacheService.get(cacheKey);
  if (cachedBands) {
    return Promise.resolve(cachedBands);
  }

  const promises = [];
  _.forEach(STATIC_BANDS_DATA, (artist) => {
    promises.push(spotifyService.getArtist(artist.title));
  });
  return Promise.all(promises).then((spotifyBands) => {
    let bands = _.merge(STATIC_BANDS_DATA, spotifyBands);
    if (sort) {
      bands = _.sortBy(bands, 'popularity').reverse();
    }
    cacheService.set(cacheKey, bands);
    return bands;
  });
}

/**
 * Retrieve band by slug
 */
exports.getBandBySlug = (slug) => {
  const band = _.find(STATIC_BANDS_DATA, (artist) => {
    return artist.slug === slug;
  })
  if (!band) {
    throw {
      'statusCode': 404,
      'message': 'Band not found'
    };
  }
  return band;
}

/**
 * Retrieve band
 */
exports.getBand = (slug) => {
  const band = exports.getBandBySlug(slug);

  const cacheKey = `${CACHED_BAND_KEY}_${slug}`;
  const cachedBand = cacheService.get(cacheKey);
  if (cachedBand) {
    return Promise.resolve(cachedBand);
  }
  
  const promises = [];

  promises.push(twitterService.getTweets(band.title));
  promises.push(spotifyService.getAlbumCount(band.title));
  promises.push(nautiljonService.getAlbumCount(band.slug));

  return Promise.all(promises).then((data) => {
    band.tweets = data[0];
    band.spotify_album_count = data[1];
    band.nautiljon_album_count = data[2];
    cacheService.set(cacheKey, band);
    return band;
  });
}
