import { createProxyMiddleware } from "http-proxy-middleware";

export const proxy = (target: string) =>
  createProxyMiddleware({
    target,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",

    // ✔ Fix wrong path issue
    pathRewrite: (path, req) => {
      return path.replace("/api", "");
    },

    // ✔ Prevent hanging
    onError: (err, req, res) => {
      console.error("🔥 Proxy Error:", err.message);
      res.writeHead(502, {
        "Content-Type": "application/json",
      });
      res.end(
        JSON.stringify({
          success: false,
          message: "Proxy failed to reach service",
        })
      );
    },

    // ✔ Prevent socket hang up
    proxyTimeout: 20000,
    timeout: 25000,
  });
