module.exports = {
    // exclude: [ 'node_modules/@babel/**', 'node_modules/core-js/**' ],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  }