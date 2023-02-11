module.exports = {
  arrowParens: 'always',
  astroAllowShorthand: true,
  plugins: [require.resolve('prettier-plugin-astro')],
  singleQuote: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
