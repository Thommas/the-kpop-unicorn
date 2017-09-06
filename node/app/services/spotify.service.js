/**
 * The Kpop Unicorn
 *
 * Services - Spotify
 *
 * @module services/spotify
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const SpotifyWebApi = require('spotify-web-api-node');

function getSpotifyAccessToken()
{
  const spotifyApi = new SpotifyWebApi({
    clientId : process.env.SPOTIFY_CLIENT_ID,
    clientSecret : process.env.SPOTIFY_CLIENT_SECRET
  });
  return spotifyApi.clientCredentialsGrant()
    .then((data) => {
      spotifyApi.setAccessToken(data.body['access_token']);
      return spotifyApi;
    });
}

/**
 * Retrieve artist albums
 */
exports.getArtistAlbums = () => {
  return getSpotifyAccessToken().then((spotifyApi) => {
    return spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
      .then((data) => {
        return data.body;
      });
  });
}
