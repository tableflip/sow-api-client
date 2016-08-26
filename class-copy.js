var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports = function (id, data, cb) {
  request({
    url: this._url + '/class/' + encodeURIComponent(id) + '/copy',
    method: 'POST',
    json: true,
    body: data
  }, requestCallback(cb))
}
