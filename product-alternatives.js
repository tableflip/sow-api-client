var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (slug, opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  opts.slug = slug

  request({
    url: this._url + '/product/alternatives',
    json: true,
    qs: opts
  }, requestCallback(cb))
}
