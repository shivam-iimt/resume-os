import { Router } from "express";
import {
  sendNotification,
  getMyNotifications,
} from "../controllers/notification.controller";

const router = Router();

router.post("/send", sendNotification);
router.get("/list", getMyNotifications);

export default router;
