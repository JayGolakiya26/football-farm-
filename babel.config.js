module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      ['styled-components', {ssr: true}],
      'react-native-reanimated/plugin',
      'transform-inline-environment-variables',
      [
        'module-resolver',
        {
          alias: {
            '@i18n': './src/i18n',
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@screens': './src/components/screens',
            '@organisms': './src/components/organisms',
            '@templates': './src/components/templates',
            '@redux': './src/redux',
            '@navigation': './src/navigation',
            '@constants': './src/constants',
            '@containers': './src/Containers',
            '@utils': './src/utils',
            '@api': './src/api',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
