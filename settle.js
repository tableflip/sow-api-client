var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (orderId, transaction, cb) {
  request({
    url: this._url + '/order/' + encodeURIComponent(orderId) + '/settle',
    method: 'POST',
    json: true,
    body: {transaction: transaction}
  }, function (er, res, body) {
    if (er) return cb(er)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
