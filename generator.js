// Imports
const {
    generatePreset,
    injectGoogleFontLink,
  } = require('@vuetify/cli-plugin-utils')
  
  // Updates the Vuetify object with provided preset
  module.exports = api => generatePreset(api, 'UP-preset', () => {
    // Invoked after the generator has completed.
    // A common use-case is adding font links
  
    // Works the same as the above, but accepts multiple values
    injectGoogleFontLink(api, [
        'Montserrat',
        'Inter',
    ])
  })