const siteConfig = require("./config.json");

module.exports = {
  publicPath: "/gallery/",
  runtimeCompiler: true,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = siteConfig.title;
      return args;
    });
  }
};
