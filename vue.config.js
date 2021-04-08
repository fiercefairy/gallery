module.exports = {
  publicPath: "/gallery/",
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Ilya Eivy: Gallery";
      return args;
    });
  },
};
