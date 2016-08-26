var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports.get = function (id, cb) {
  request({
    method: 'GET',
    url: this._url + '/recipe/' + encodeURIComponent(id),
    json: true
  }, requestCallback(cb))
}

module.exports.post = function (data, cb) {
  request({
    method: 'POST',
    url: this._url + '/recipe',
    json: true,
    body: data
  }, requestCallback(cb))
}

module.exports.patch = function (id, data, cb) {
  request({
    method: 'PATCH',
    url: this._url + '/recipe/' + encodeURIComponent(id),
    json: true,
    body: data
  }, requestCallback(cb))
}

module.exports.delete = function (id, cb) {
  request({
    method: 'DELETE',
    url: this._url + '/recipe/' + encodeURIComponent(id),
    json: true
  }, requestCallback(cb))
}
