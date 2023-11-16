const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    resolver: {
      sourceExts: [...defaultConfig.resolver.sourceExts, 'jsx', 'js', 'json'],
    },
  };
})();
