var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports.get = function (id, cb) {
  request({
    method: 'GET',
    url: this._url + '/order/' + encodeURIComponent(id),
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}

module.exports.post = function (data, cb) {
  request({
    url: this._url + '/order',
    method: 'POST',
    json: true,
    body: data
  }, requestCallback(cb))
}
