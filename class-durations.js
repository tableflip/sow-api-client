var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (cb) {
  request({
    url: this._url + '/class/durations',
    json: true
  }, requestCallback(cb))
}
