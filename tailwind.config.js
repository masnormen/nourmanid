const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        quitewhite: '#f5f5f5',
        coffeetint: '#f5f3ef',
        coffeestain: '#ecdab7',
        sunflower: '#FCD34D',
        // wood: '#453224',
        wood: '#5f4b3d',
        leaf: '#263D2D',
        amber: colors.amber,
        gray: colors.blueGray,
        indigo: colors.indigo,
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
