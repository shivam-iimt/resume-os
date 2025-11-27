import { Request, Response, NextFunction } from "express";
import { logger } from "../logger";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error({
    msg: err.message || "Internal Server Error",
    stack: err.stack,
    route: req.originalUrl,
  });

  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
};
