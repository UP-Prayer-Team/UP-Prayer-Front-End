// preset/index.js

require('./overrides.sass')

const preset = {
  theme: {
    themes: {
      light: {
        primary: '#a300ff',
        secondary: '#c70098',
        accent: '#720D5D',
        error: '#f91600',
      },
    },
  },
}

module.exports = { preset }