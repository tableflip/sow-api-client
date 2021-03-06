var request = require('request')
var Boom = require('boom')

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
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
