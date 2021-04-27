module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        profile: {
          primary: '#288db8',
          secondary: '#2c9dcd',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'ui-sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
