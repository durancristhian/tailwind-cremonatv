module.exports = {
  presets: [require('./presets/brand'), require('./presets/blog')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['**/*.tsx'],
}
