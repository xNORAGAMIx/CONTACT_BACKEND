import express from "express";
import {
  getCurrentUser,
  registerUser,
  loginUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", getCurrentUser);

export default router;
