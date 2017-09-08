/**
 * The Kpop Unicorn
 *
 * Controllers - Google Trends
 *
 * @module controllers/google-trends
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const util = require('util');

const googleTrendsService = require('../services/google-trends.service.js');

exports.setup = (app) => {
  /**
   * Get trends score
   *
   * @api {get} /api/google-trends/score/:slug Get trends
   * @apiGroup GoogleTrends
   * @apiName GetGoogleTrendsScore
   * @apiParam {String} slug Band slug
   * @apiSuccess {Object[]} - List of trends
   */
  const getScore = (req, res) => {
    res.promise(googleTrendsService.getScore(req.params.slug));
  };
  app.get('/api/google-trends/score/:slug', getScore);
}
