/**
 * The Kpop Unicorn
 *
 * Services - Twitter
 *
 * @module services/twitter
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const Twitter = require('twitter');

function getTwitterClient()
{
  return new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });
}

/**
 * Retrieve tweets
 */
exports.getTweets = (search) => {
  const client = getTwitterClient();
  const params = {
    count: 3,
    q: search,
    lang: 'fr'
  };
  return client.get('search/tweets', params).then((data) => {
    return data.statuses;
  });
}
