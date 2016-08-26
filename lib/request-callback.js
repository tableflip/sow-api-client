var Boom = require('boom-browserify')

module.exports = function (cb) {
  return function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode < 200 || res.statusCode >= 400) {
      var message = (body && body.message) || 'Unexpected API response'
      err = Boom.create(res.statusCode, message, body)
      console.error(err)
      return cb(err)
    }

    cb(null, body)
  }
}
