import { createProxyMiddleware } from "http-proxy-middleware";

export const proxy = (target: string) =>
  createProxyMiddleware({
    target,
    changeOrigin: true,
    timeout: 30000,
  });
