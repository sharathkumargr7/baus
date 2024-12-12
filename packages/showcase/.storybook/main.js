module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  babel: async (options) => ({
    ...options,
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
  }),
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': '@emotion/react',
      '@emotion/styled': require.resolve('@emotion/styled'),
    };
    return config;
  },
}; 