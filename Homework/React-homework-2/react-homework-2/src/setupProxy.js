// setupProxy.js

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://openapi.foodsafetykorea.go.kr",
      changeOrigin: true,
    })
  );
};
