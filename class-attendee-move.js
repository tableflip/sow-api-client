var request = require('request')
var Boom = require('boom')

module.exports = function (fromClassId, toClassId, attendeeId, data, cb) {
  request({
    method: 'POST',
    url: this._url + '/class/' + encodeURIComponent(fromClassId) + '/attendee/' + encodeURIComponent(attendeeId) + '/move?to=' + encodeURIComponent(toClassId),
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
