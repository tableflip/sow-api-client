# sow-api-client
Node.js client to the [sow-api](https://github.com/tableflip/sow-api).

## Usage

```js
var SowApi = require('sow-api-client')
var api = new SowApi('http://localhost:3300')

api.classes(function (err, classes) {
  // ...etc.
})
```

Generally the API follows the following structure:

```js
// GET things (usually paginated)
api.things({page: 0, size: 50}, cb)

// GET thing
api.thing(id, cb)

// POST thing
api.createThing(data, cb)

// PATCH thing
api.updateThing(id, data, cb)

// DELETE thing
api.removeThing(id, cb)
```