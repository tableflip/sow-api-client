var request = require('request')
var Boom = require('boom')

module.exports = function (slug, cb) {
  request({
    url: this._url + '/class/alternatives',
    json: true,
    qs: {slug: slug}
  }, function (er, res, body) {
    if (er) return cb(er)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
