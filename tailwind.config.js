const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      // This overrides the default font for the entire site
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  // ... rest of config
}