var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (orderId, transaction, cb) {
  request({
    url: this._url + '/order/' + encodeURIComponent(orderId) + '/settle',
    method: 'POST',
    json: true,
    body: {transaction: transaction}
  }, requestCallback(cb))
}
