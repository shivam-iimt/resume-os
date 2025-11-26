import { Router } from "express";
import { proxy } from "../core/utils/proxy";

const router = Router();

router.use("/auth", proxy("http://localhost:4101"));
router.use("/user", proxy("http://localhost:4102"));
router.use("/resume", proxy("http://localhost:4103"));
router.use("/portfolio", proxy("http://localhost:4104"));
router.use("/file", proxy("http://localhost:4105"));
router.use("/ai", proxy("http://localhost:4106"));
router.use("/notification", proxy("http://localhost:4107"));

export default router;
