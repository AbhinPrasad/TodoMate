import express from "express";
import { facebookOAuth, googleOAuth } from "../controllers/authController.js";

const router = express.Router();

router.post("/google", googleOAuth);
router.post("/facebook", facebookOAuth);

export default router;
