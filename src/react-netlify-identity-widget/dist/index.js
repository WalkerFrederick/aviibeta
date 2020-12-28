
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-netlify-identity-widget.esm.js')
} else {
  module.exports = require('./react-netlify-identity-widget.esm.js')
}
