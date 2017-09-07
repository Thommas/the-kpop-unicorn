/**
 * The Kpop Unicorn
 *
 * Controllers - Twitter
 *
 * @module controllers/twitter
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const twitterService = require('../services/twitter.service.js');

exports.setup = (app) => {
  /**
   * Get tweets
   *
   * @api {get} /api/twitter/:slug Get tweets
   * @apiGroup Twitter
   * @apiName GetTweets
   * @apiParam {String} slug Band slug
   * @apiSuccess {Object[]} - List of tweets
   */
  const getTweets = (req, res) => {
    res.promise(twitterService.getTweets(req.params.slug));
  };
  app.get('/api/twitter/:slug', getTweets);
}
