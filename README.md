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