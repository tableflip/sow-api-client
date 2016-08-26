var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (cb) {
  request({
    url: this._url + '/promo/types',
    json: true
  }, requestCallback(cb))
}
