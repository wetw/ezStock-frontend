let enableBaseUrl = 'true' === process.env.enableBaseUrl;
let publicPath = '/';
if (enableBaseUrl) {
  publicPath = process.env.publicPath;
}

module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production' ? publicPath : '/',
};
