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
   * Get twitter score
   *
   * @api {get} /api/twitter/score/:slug Get tweets
   * @apiGroup Twitter
   * @apiName GetTwitterScore
   * @apiParam {String} slug Band slug
   * @apiSuccess {Object[]} - List of tweets
   */
  const getScore = (req, res) => {
    res.promise(twitterService.getScore(req.params.slug));
  };
  app.get('/api/twitter/score/:slug', getScore);

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
