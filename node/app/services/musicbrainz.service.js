/**
 * The Kpop Unicorn
 *
 * Services - Musicbrainz
 *
 * @module services/musicbrainz
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const axios = require('axios');
const bandService = require('./band.service.js');

const MUSICBRAINZ_API_URL = 'https://musicbrainz.org/ws/2';

/**
 * Search artist by name
 */
exports.getArtistId = (slug) => {
  const band = bandService.getBandBySlug(slug);
  const url = `${MUSICBRAINZ_API_URL}/artist?query=artist:${band.title} country:KR&limit=10&fmt=json`;
  return axios.get(url)
    .then((response) => {
      const artists = response.data.artists;
      return artists.length > 0 ? artists[0].id : null;
    })
    .catch((error) => {
      console.log(error);
      // TODO: Log error somewhere
    });
}

/**
 * Get album count
 */
exports.getAlbumCount = (slug) => {
  return 0;
  return exports.getArtistId(slug)
    .then((artistID) => {
      const url = `${MUSICBRAINZ_API_URL}/release-group?artist=${artistID}&fmt=json`;
      return axios.get(url);
    })
    .then((response) => {
      return +response.data['release-group-count'];
    })
    .catch((error) => {
      console.log(error);
      // TODO: Log error somewhere
    });
}

/**
 * Get song count
 */
exports.getSongCount = (slug) => {
  return 0;
  return exports.getArtistId(slug)
    .then((artistID) => {
      const url = `${MUSICBRAINZ_API_URL}/release?artist=${artistID}&fmt=json`;
      return axios.get(url);
    })
    .then((response) => {
      return +response.data['release-count'];
    })
    .catch((error) => {
      console.log(error);
      // TODO: Log error somewhere
    });
}
