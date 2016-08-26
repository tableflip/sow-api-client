var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  request({
    url: this._url + '/orders/unredeemed',
    json: true,
    qs: opts
  }, requestCallback(cb))
}

module.exports.legacy = function (opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  request({
    url: this._url + '/orders/unredeemed/legacy',
    json: true,
    qs: opts
  }, requestCallback(cb))
}
