import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import { rateLimit } from "express-rate-limit";

export const securityMiddlewares = [helmet(), mongoSanitize(), xss()];

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 200, // limit each IP
  message: "Too many requests, please try again later.",
});
