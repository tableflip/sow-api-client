var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports.get = function (classId, attendeeId, cb) {
  request({
    url: this._url + '/class/' + encodeURIComponent(classId) + '/attendee/' + encodeURIComponent(attendeeId),
    json: true
  }, requestCallback(cb))
}

module.exports.post = function (classId, data, cb) {
  request({
    method: 'POST',
    url: this._url + '/class/' + encodeURIComponent(classId) + '/attendee',
    json: true,
    body: data
  }, requestCallback(cb))
}

module.exports.patch = function (classId, attendeeId, data, cb) {
  request({
    method: 'PATCH',
    url: this._url + '/class/' + encodeURIComponent(classId) + '/attendee/' + encodeURIComponent(attendeeId),
    json: true,
    body: data
  }, requestCallback(cb))
}

module.exports.delete = function (classId, attendeeId, cb) {
  request({
    method: 'DELETE',
    url: this._url + '/class/' + encodeURIComponent(classId) + '/attendee/' + encodeURIComponent(attendeeId),
    json: true
  }, requestCallback(cb))
}
