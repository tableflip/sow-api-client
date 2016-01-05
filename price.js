var request = require('request')
var Boom = require('boom')

module.exports = function (data, cb) {
  var body = {}

  if (data.classes) body.classes = data.classes
  if (data.products) body.products = data.products
  if (data.vouchers) body.vouchers = data.vouchers
  if (data.redeemedVouchers) body.redeemedVouchers = data.redeemedVouchers
  if (data.promo) body.promo = data.promo
  if (data.shippingType) body.shippingType = data.shippingType

  request({
    url: this._url + '/price',
    method: 'POST',
    json: true,
    body: body
  }, function (er, res, body) {
    if (er) return cb(er)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
