/**
 * The Kpop Unicorn
 *
 * Services - Google Trends
 *
 * @module services/google-trends
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const googleTrends = require('google-trends-api');
const bandService = require('./band.service.js');

/**
 * Retrieve trends
 */
exports.getTrends = (slug) => {
  const band = bandService.getBandBySlug(slug);
  const params = {
    keyword: band.title,
    startTime: new Date('2017-01-01'),
    endTime: new Date('2017-09-01')
  };
  return googleTrends.interestOverTime(params)
    .then((results) => {
      const json = JSON.parse(results);
      return json;
      return results.default.timelineData[results.default.timelineData.length - 1].value[0];
    })
    .catch((err) => {
      console.error('Oh no there was an error', err);
      // TODO: handle error
    });
}
