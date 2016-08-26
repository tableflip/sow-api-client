var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (id, opt, cb) {
  if (!cb) {
    cb = opt
    opt = {}
  }

  opt = opt || {}

  request({
    url: this._url + '/class/' + encodeURIComponent(id) + '/menu',
    qs: opt,
    json: true
  }, requestCallback(cb))
}
