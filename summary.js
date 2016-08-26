var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (data, cb) {
  var body = {}

  if (data.classes) body.classes = data.classes.map(objectId)
  if (data.products) body.products = data.products.map(objectId)
  if (data.vouchers) body.vouchers = data.vouchers.map(objectId)

  request({
    url: this._url + '/summary',
    method: 'POST',
    json: true,
    qs: {published: true},
    body: body
  }, function (er, res, body) {
    if (er) return cb(er)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}

function objectId (obj) {
  if (Object.prototype.toString.call(obj) === '[object String]') {
    return obj
  } else if (obj.id) {
    return obj.id
  }
  throw new TypeError('Unexpected object type')
}
