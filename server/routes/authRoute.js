import express from "express"
import { googleOAuth } from "../controllers/authController.js";

const router = express.Router();

router.post("/google",googleOAuth);

export default router;