const withCSS = require('@zeit/next-css');
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

const config = withCSS({
  webpack: (config, { isServer }) => {
    // if (!isServer) {
    //   config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    // }
    return config;
  },
});

module.exports = config;
