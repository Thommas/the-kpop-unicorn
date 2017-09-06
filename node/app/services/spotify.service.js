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
 * Retrieve artist data
 */
exports.getArtist = (artistTitle) => {
  return getSpotifyAccessToken().then((spotifyApi) => {
    return spotifyApi.searchArtists(artistTitle)
      .then((data) => {
        const items = data.body.artists.items;
        return {
          title: artistTitle,
          name: items.length > 0 ? items[0].name : null,
          popularity: items.length > 0 ? items[0].popularity : null,
          image: items[0].images.length > 0 ? items[0].images[0].url : null
        };
      });
  });
}
