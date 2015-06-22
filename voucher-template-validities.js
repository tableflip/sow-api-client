var request = require('request')
var Boom = require('boom')

module.exports = function (cb) {
  request({
    url: this._url + '/voucher/template/validities',
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)

      console.log(body)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
