import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(cors());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "gateway" });
});


// Auth Service
app.use(
  "/api/auth",
  createProxyMiddleware({
    target: "http://127.0.0.1:4101",
    changeOrigin: true,
    pathRewrite: { "^/api/auth": "/auth" },
  })
);

// User Service
app.use(
  "/api/user",
  createProxyMiddleware({
    target: "http://127.0.0.1:4102",
    changeOrigin: true,
    pathRewrite: { "^/api/user": "/user" },
  })
);

// Resume Service
app.use(
  "/api/resume",
  createProxyMiddleware({
    target: "http://127.0.0.1:4103",
    changeOrigin: true,
    pathRewrite: { "^/api/resume": "/resume" },
  })
);

// Portfolio Service
app.use(
  "/api/portfolio",
  createProxyMiddleware({
    target: "http://127.0.0.1:4104",
    changeOrigin: true,
    pathRewrite: { "^/api/portfolio": "/portfolio" },
  })
);

// File Service
app.use(
  "/api/file",
  createProxyMiddleware({
    target: "http://127.0.0.1:4105",
    changeOrigin: true,
    pathRewrite: { "^/api/file": "/file" },
  })
);

// AI Service
app.use(
  "/api/ai",
  createProxyMiddleware({
    target: "http://127.0.0.1:4106",
    changeOrigin: true,
    pathRewrite: { "^/api/ai": "/ai" },
  })
);

// Notification Service
app.use(
  "/api/notification",
  createProxyMiddleware({
    target: "http://127.0.0.1:4107",
    changeOrigin: true,
    pathRewrite: { "^/api/notification": "/notification" },
  })
);

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log("🚀 Gateway running on", PORT);
});
