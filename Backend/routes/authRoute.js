import express from "express";
import {
  registerController,
  testController,
} from "../controllers/authController.js";
import loginController from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();
// const { loginController, authCOntroller } = aC;
// Routing
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
