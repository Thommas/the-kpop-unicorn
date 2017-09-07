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
const musixmatchService = require('./musixmatch.service.js');

const CACHED_BANDS_KEY = 'cached_bands';
const CACHED_BAND_KEY = 'cached_band';

const STATIC_BANDS_DATA = [
  {
    'title': 'BigBang',
    'slug': 'big-bang',
    'nautiljon_url': 'http://www.nautiljon.com/people/bigbang.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'BTS',
    'slug': 'bts',
    'nautiljon_url': 'http://www.nautiljon.com/people/bts.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'Twice',
    'slug': 'twice',
    'nautiljon_url': 'http://www.nautiljon.com/people/twice+(corée+du+sud).html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'SNSD',
    'slug': 'snsd',
    'nautiljon_url': 'http://www.nautiljon.com/people/girls-+generation.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'Red Velvet',
    'slug': 'red-velvet',
    'nautiljon_url': 'http://www.nautiljon.com/people/red+velvet.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'Got7',
    'slug': 'got7',
    'nautiljon_url': 'http://www.nautiljon.com/people/got7.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'Exo',
    'slug': 'exo',
    'nautiljon_url': 'http://www.nautiljon.com/people/exo.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'FTIsland',
    'slug': 'ft-island',
    'nautiljon_url': 'http://www.nautiljon.com/people/ftisland.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'Blackpink',
    'slug': 'blackpink',
    'nautiljon_url': 'http://www.nautiljon.com/people/blackpink.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'Mamamoo',
    'slug': 'mamamoo',
    'nautiljon_url': 'http://www.nautiljon.com/people/mamamoo.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': '비스트',
    'slug': 'beast',
    'nautiljon_url': 'http://www.nautiljon.com/people/beast.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'TVXQ',
    'slug': 'tvxq',
    'nautiljon_url': 'http://www.nautiljon.com/people/tvxq!.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'APink',
    'slug': 'apink',
    'nautiljon_url': 'http://www.nautiljon.com/people/apink.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'GFriend',
    'slug': 'gfriend',
    'nautiljon_url': 'http://www.nautiljon.com/people/gfriend.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'Infinite',
    'slug': 'infinite',
    'nautiljon_url': 'http://www.nautiljon.com/people/infinite.html',
    'expected_album_count': 300,
    'expected_song_count': 300
  },
  {
    'title': 'Monsta X',
    'slug': 'monsta-x',
    'nautiljon_url': 'http://www.nautiljon.com/people/monsta+x.html',
    'expected_album_count': 300,
    'expected_song_count': 300
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
    promises.push(spotifyService.getArtist(artist.slug));
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

  promises.push(twitterService.getTweets(band.slug));
  promises.push(spotifyService.getAlbumCount(band.slug));
  promises.push(nautiljonService.getAlbumCount(band.slug));
  promises.push(musixmatchService.getAlbumCount(band.slug));
  promises.push(spotifyService.getSongCount(band.slug));
  promises.push(nautiljonService.getSongCount(band.slug));
  promises.push(musixmatchService.getSongCount(band.slug));

  return Promise.all(promises).then((data) => {
    band.tweets = data[0];
    band.spotify_album_count = data[1];
    band.nautiljon_album_count = data[2];
    band.musixmatch_album_count = data[3];
    band.spotify_song_count = data[4];
    band.nautiljon_song_count = data[5];
    band.musixmatch_song_count = data[6];
    cacheService.set(cacheKey, band);
    return band;
  });
}
