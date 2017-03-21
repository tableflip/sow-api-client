var request = require('request')
var Boom = require('boom')

module.exports.get = function (opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  request({
    url: this._url + '/corporate-event-templates',
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

module.exports.getBySlug = function (slug, opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  request({
    url: this._url + '/corporate-event-templates/' + slug,
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode !== 200) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
