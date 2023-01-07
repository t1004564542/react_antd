const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'https://11.12.117.38',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
      }
    )
  )
}
