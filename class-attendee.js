var request = require('request')
var Boom = require('boom')

module.exports.get = function (classId, attendeeId, cb) {
  request({
    url: this._url + '/class/' + encodeURIComponent(classId) + '/attendee/' + encodeURIComponent(attendeeId),
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}

module.exports.post = function (classId, data, cb) {
  request({
    method: 'POST',
    url: this._url + '/class/' + encodeURIComponent(classId) + '/attendee',
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

module.exports.patch = function (classId, attendeeId, data, cb) {
  request({
    method: 'PATCH',
    url: this._url + '/class/' + encodeURIComponent(classId) + '/attendee/' + encodeURIComponent(attendeeId),
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

module.exports.delete = function (classId, attendeeId, cb) {
  request({
    method: 'DELETE',
    url: this._url + '/class/' + encodeURIComponent(classId) + '/attendee/' + encodeURIComponent(attendeeId),
    json: true
  }, function (err, res, body) {
    if (err) return cb(err)

    if (res.statusCode >= 400) {
      return cb(Boom.create(res.statusCode, 'Unexpected API response', body))
    }

    cb(null, body)
  })
}
