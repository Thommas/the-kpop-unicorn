/**
 * The Kpop Unicorn
 *
 * Services - Google Trends
 *
 * @module services/google-trends
 * @author Thomas Bullier <thomasbullier@gmail.com>
 */

const _ = require('lodash');
const moment = require('moment');
const googleTrends = require('google-trends-api');
const bandService = require('./band.service.js');

/**
 * Get score based on last month google trends
 */
exports.getScore = (slug) => {
  const band = bandService.getBandBySlug(slug);
  const now = moment();
  const before = moment().subtract(1, 'month');
  const params = {
    keyword: band.title,
    startTime: before.toDate(),
    endTime: now.toDate()
  };
  return googleTrends.interestOverTime(params)
    .then((results) => {
      const json = JSON.parse(results);
      const sum = _.sumBy(json.default.timelineData, (o) => { return o.value[0]; });
      return Math.round(sum / json.default.timelineData.length);
    })
    .catch((err) => {
      console.error('Oh no there was an error', err);
      // TODO: handle error
    });
}
