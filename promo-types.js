var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (cb) {
  request({
    url: this._url + '/promo/types',
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
