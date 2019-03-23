const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({
  config,
  mode
}) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // config.module.rules = config.module.rules.filter(rule => !rule.test.test('.scss'));
  config.module.rules = config.module.rules.map(rule => {
    if (!rule.test.test('.svg')) {
      return rule;
    }

    const newRule = rule;
    // Changes existing default rule to not handle SVG files
    newRule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/;
    return newRule;
  });

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    },
    {
      test: /\.stories\.js?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    }
  );

  // Return the altered config
  return config;
};
