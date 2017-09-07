/**
 * The Kpop Unicorn
 *
 * Services - MusixMatch
 *
 * @module services/musixmatch
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const axios = require('axios');
const bandService = require('./band.service.js');

const MUSIXMATCH_API_URL = 'http://api.musixmatch.com/ws/1.1';

function insertApiKey(url)
{
  return `${url}&apikey=${process.env.MUSIXMATCH_API_KEY}`;
}

/**
 * Get artist id
 */
exports.getArtistId = (slug) => {
  const band = bandService.getBandBySlug(slug);
  const url = `${MUSIXMATCH_API_URL}/artist.search?q_artist=${band.title}&page_size=1`;
  return axios.get(insertApiKey(url))
    .then((response) => {
      const list = response.data.message.body.artist_list;
      return list.length > 0 ? list[0].artist.artist_id : null;
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
  return exports.getArtistId(slug)
    .then((artistID) => {
      const url = `${MUSIXMATCH_API_URL}/artist.albums.get?artist_id=${artistID}&s_release_date=desc&g_album_name=1`;
      return axios.get(insertApiKey(url));
    })
    .then((response) => {
      return response.data.message.header.available;
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
  const band = bandService.getBandBySlug(slug);
  const url = `${MUSIXMATCH_API_URL}/track.search?q_artist=${band.title}&page_size=1&page=1&s_track_rating=desc`;
  return axios.get(insertApiKey(url))
    .then((response) => {
      return response.data.message.header.available;
    })
    .catch((error) => {
      console.log(error);
      // TODO: Log error somewhere
    });
}
