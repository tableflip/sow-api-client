var request = require('request')
var Boom = require('boom')

module.exports.get = function (id, cb) {
  request({
    method: 'GET',
    url: this._url + '/promo/' + encodeURIComponent(id),
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
    method: 'POST',
    url: this._url + '/promo',
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

module.exports.patch = function (id, data, cb) {
  request({
    method: 'PATCH',
    url: this._url + '/promo/' + encodeURIComponent(id),
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

module.exports.delete = function (id, cb) {
  request({
    method: 'DELETE',
    url: this._url + '/promo/' + encodeURIComponent(id),
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
