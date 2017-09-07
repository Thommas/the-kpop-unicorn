/**
 * The Kpop Unicorn
 *
 * Services - Spotify
 *
 * @module services/spotify
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const SpotifyWebApi = require('spotify-web-api-node');
const cacheService = require('./cache.service.js');

const SPOTIFY_ACCESS_TOKEN_KEY = 'spotify_access_token';

function getSpotifyAccessToken()
{
  const spotifyApi = new SpotifyWebApi({
    clientId : process.env.SPOTIFY_CLIENT_ID,
    clientSecret : process.env.SPOTIFY_CLIENT_SECRET
  });

  const token = cacheService.get(SPOTIFY_ACCESS_TOKEN_KEY);
  if (!token) {
    return spotifyApi.clientCredentialsGrant()
      .then((data) => {
        cacheService.set(SPOTIFY_ACCESS_TOKEN_KEY, data.body['access_token']);
        spotifyApi.setAccessToken(data.body['access_token']);
        return spotifyApi;
      });
  } else {
    spotifyApi.setAccessToken(token);
    return Promise.resolve(spotifyApi);
  }
}

/**
 * Retrieve artist data
 */
exports.getArtist = (artistTitle) => {
  return getSpotifyAccessToken()
    .then((spotifyApi) => {
      return spotifyApi.searchArtists(artistTitle);
    })
    .then((data) => {
      const items = data.body.artists.items;
      return {
        title: artistTitle,
        name: items.length > 0 ? items[0].name : null,
        popularity: items.length > 0 ? items[0].popularity : null,
        image: items[0].images.length > 0 ? items[0].images[0].url : null
      };
    });
}

/**
 * Retrieve artist album count
 */
exports.getAlbumCount = (artistTitle) => {
  return getSpotifyAccessToken()
    .then((spotifyApi) => {
      return spotifyApi.searchArtists(artistTitle)
        .then((data) => {
          const items = data.body.artists.items;
          return items.length > 0 ? items[0].uri.split(':')[2] : null;
        })
        .then((artistSpotifyID) => {
          console.log('artistSpotifyID', artistSpotifyID);
          return spotifyApi.getArtistAlbums(artistSpotifyID);
        })
        .then((data) => {
          return data.body.total;
        });
    })
}
