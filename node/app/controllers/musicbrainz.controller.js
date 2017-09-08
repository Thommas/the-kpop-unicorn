/**
 * The Kpop Unicorn
 *
 * Controllers - Musicbrainz
 *
 * @module controllers/musicbrainz
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const musicbrainzService = require('../services/musicbrainz.service.js');

exports.setup = (app) => {
  /**
   * Get artist ID
   *
   * @api {get} /api/musicbrainz/artist-id/:slug Get artist ID
   * @apiGroup MusicBrainz
   * @apiName GetArtistId
   * @apiParam {String} slug Band slug
   */
  const getArtistId = (req, res) => {
    res.promise(musicbrainzService.getArtistId(req.params.slug));
  };
  app.get('/api/musicbrainz/artist-id/:slug', getArtistId);

  /**
   * Get album count
   *
   * @api {get} /api/musicbrainz/album-count/:slug Get album count
   * @apiGroup MusicBrainz
   * @apiName GetAlbumCount
   * @apiParam {String} slug Band slug
   * @apiSuccess {Number} Album count
   */
  const getAlbumCount = (req, res) => {
    res.promise(musicbrainzService.getAlbumCount(req.params.slug));
  };
  app.get('/api/musicbrainz/album-count/:slug', getAlbumCount);

  /**
   * Get song count
   *
   * @api {get} /api/musicbrainz/song-count/:slug Get song count
   * @apiGroup MusicBrainz
   * @apiName GetSongCount
   * @apiParam {String} slug Band slug
   * @apiSuccess {Number} Song count
   */
  const getSongCount = (req, res) => {
    res.promise(musicbrainzService.getSongCount(req.params.slug));
  };
  app.get('/api/musicbrainz/song-count/:slug', getSongCount);
}
