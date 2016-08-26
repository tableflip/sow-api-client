var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports.get = function (id, cb) {
  request({
    method: 'GET',
    url: this._url + '/product/' + encodeURIComponent(id),
    json: true
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

  opts = opts || {}
  opts.slug = slug

  request({
    url: this._url + '/product',
    json: true,
    qs: opts
  }, function (er, res, body) {
    if (er) return cb(er)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}

module.exports.post = function (data, cb) {
  request({
    method: 'POST',
    url: this._url + '/product',
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
    url: this._url + '/product/' + encodeURIComponent(id),
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
    url: this._url + '/product/' + encodeURIComponent(id),
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
