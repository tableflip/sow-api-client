var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (slug, cb) {
  request({
    url: this._url + '/class/alternatives',
    json: true,
    qs: {slug: slug}
  }, requestCallback(cb))
}
