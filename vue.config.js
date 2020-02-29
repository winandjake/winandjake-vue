module.exports = {
  filenameHashing: false,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true
      })
  }
};
