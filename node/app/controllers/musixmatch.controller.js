/**
 * The Kpop Unicorn
 *
 * Controllers - Musixmatch
 *
 * @module controllers/musixmatch
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const musixmatchService = require('../services/musixmatch.service.js');

exports.setup = (app) => {
  /**
   * Get artist data
   *
   * @api {get} /api/musixmatch/artist/:slug Get artist data
   * @apiGroup Musixmatch
   * @apiName GetArtist
   * @apiParam {String} slug Band slug
   */
  const getArtistId = (req, res) => {
    res.promise(musixmatchService.getArtistId(req.params.slug));
  };
  app.get('/api/musixmatch/artist-id/:slug', getArtistId);

  /**
   * Get album count
   *
   * @api {get} /api/musixmatch/album-count/:slug Get album count
   * @apiGroup Musixmatch
   * @apiName GetAlbumCount
   * @apiParam {String} slug Band slug
   * @apiSuccess {Number} Album count
   */
  const getAlbumCount = (req, res) => {
    res.promise(musixmatchService.getAlbumCount(req.params.slug));
  };
  app.get('/api/musixmatch/album-count/:slug', getAlbumCount);

  /**
   * Get song count
   *
   * @api {get} /api/musixmatch/song-count/:slug Get song count
   * @apiGroup Musixmatch
   * @apiName GetSongCount
   * @apiParam {String} slug Band slug
   * @apiSuccess {Number} Song count
   */
  const getSongCount = (req, res) => {
    res.promise(musixmatchService.getSongCount(req.params.slug));
  };
  app.get('/api/musixmatch/song-count/:slug', getSongCount);
}
