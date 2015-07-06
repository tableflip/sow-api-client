var request = require('request')
var Boom = require('boom')

module.exports = function (id, data, cb) {
  request({
    url: this._url + '/class/' + encodeURIComponent(id) + '/copy',
    method: 'POST',
    json: true,
    body: data
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
