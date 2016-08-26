var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (id, opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  request({
    url: this._url + '/class/' + encodeURIComponent(id) + '/attendees',
    json: true,
    qs: opts
  }, requestCallback(cb))
}
