var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  request({
    url: this._url + '/recipes',
    json: true,
    qs: opts
  }, requestCallback(cb))
}
