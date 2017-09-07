/**
 * The Kpop Unicorn
 *
 * Controllers - Spotify
 *
 * @module controllers/spotify
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const spotifyService = require('../services/spotify.service.js');

exports.setup = (app) => {
  /**
   * Get spotify artist data
   *
   * @api {get} /api/spotify/artist/:slug Get spotify artist data
   * @apiGroup Spotify
   * @apiName GetArtist
   * @apiParam {String} slug Band slug
   * @apiSuccess {String} title Band title
   * @apiSuccess {String} slug Band slug
   * @apiSuccess {String} nautiljon_url Nautiljon URL
   * @apiSuccess {String} name Band name on Spotify
   * @apiSuccess {Number} popularity Popularity on Spotify
   * @apiSuccess {String} image Image on Spotify
   */
  const getArtist = (req, res) => {
    res.promise(spotifyService.getArtist(req.params.slug));
  };
  app.get('/api/spotify/artist/:slug', getArtist);

  /**
   * Retrieves album count
   *
   * @api {get} /api/spotify/album-count/:slug Retrieves album count
   * @apiGroup Spotify
   * @apiName GetAlbumCount
   * @apiParam {String} slug Band slug
   * @apiSuccess {Number} Album count.
   */
  const getAlbumCount = (req, res) => {
    res.promise(spotifyService.getAlbumCount(req.params.slug));
  };
  app.get('/api/spotify/album-count/:slug', getAlbumCount);
}
