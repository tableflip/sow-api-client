var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (fromClassId, toClassId, attendeeId, data, cb) {
  request({
    method: 'POST',
    url: this._url + '/class/' + encodeURIComponent(fromClassId) + '/attendee/' + encodeURIComponent(attendeeId) + '/move?to=' + encodeURIComponent(toClassId),
    json: true,
    body: data
  }, requestCallback(cb))
}
