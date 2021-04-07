module.exports = {
  publicPath: "/gallery/",
  runtimeCompiler: true,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Adam Eivy: Gallery";
      return args;
    });
  }
};
