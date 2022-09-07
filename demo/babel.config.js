module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      // can remove { runtime: automatic } in Babel 8
      // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
