const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  return alias({
    example: 'example/src',
    '@library': 'library/src',
  })(config)
}