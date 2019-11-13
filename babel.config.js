module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  ignore: [
    '**/public',
    '**/log'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties'
  ]
};
