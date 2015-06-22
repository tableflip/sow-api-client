module.exports = function (opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}

  opts.size = 0
  opts.fields = ['_id', 'name']

  this.classTemplates(opts, cb)
}
