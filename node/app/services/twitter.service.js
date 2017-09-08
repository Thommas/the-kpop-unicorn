/**
 * The Kpop Unicorn
 *
 * Services - Twitter
 *
 * @module services/twitter
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const Twitter = require('twitter');
const bandService = require('./band.service.js');

function getTwitterClient()
{
  return new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
}

/**
 * Get score based on tweets count
 */
exports.getScore = (slug) => {
  const band = bandService.getBandBySlug(slug);
  const client = getTwitterClient();
  const params = {
    count: 9999,
    q: `${band.title} #kpop`,
    lang: 'fr',
    include_entities: false
  };
  return client.get('search/tweets', params).then((data) => {
    return data.statuses.length;
  });
}

/**
 * Retrieve tweets for a band
 */
exports.getTweets = (slug) => {
  const band = bandService.getBandBySlug(slug);
  const client = getTwitterClient();
  const params = {
    count: 3,
    q: `${band.title}`,
    lang: 'fr'
  };
  return client.get('search/tweets', params).then((data) => {
    return data.statuses;
  });
}
