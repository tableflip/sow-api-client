var request = require('request')
var requestCallback = require('./lib/request-callback')

module.exports.get = function (id, cb) {
  request({
    url: this._url + '/class/template/' + encodeURIComponent(id),
    json: true
  }, requestCallback(cb))
}

module.exports.post = function (data, cb) {
  request({
    method: 'POST',
    url: this._url + '/class/template',
    json: true,
    body: data
  }, requestCallback(cb))
}

module.exports.patch = function (id, data, opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  request({
    method: 'PATCH',
    url: this._url + '/class/template/' + encodeURIComponent(id),
    json: true,
    body: data,
    qs: opts
  }, requestCallback(cb))
}

module.exports.delete = function (id, cb) {
  request({
    method: 'DELETE',
    url: this._url + '/class/template/' + encodeURIComponent(id),
    json: true
  }, requestCallback(cb))
}
