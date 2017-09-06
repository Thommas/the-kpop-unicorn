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
  const getTweets = (req, res) => {
    res.promise(twitterService.getTweets(req.query.q));
  };
  app.get('/api/twitter', getTweets);
}
