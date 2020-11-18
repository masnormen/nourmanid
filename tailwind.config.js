module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  // },
  // purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5.5rem',
        superbig: '8rem',
      },
      colors: {
        quitewhite: '#f5f5f5',
        coffeetint: '#f5f3ef',
        coffeestain: '#ecdab7',
        sunflower: '#f1ce83',
        // wood: '#453224',
        wood: '#524033',
        leaf: '#263D2D',
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover'],
  },
  plugins: [],
};
