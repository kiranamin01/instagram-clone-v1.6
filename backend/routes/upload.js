import express from "express";
import { uploadImage } from "../controllers/upload.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Upload image route
router.post("/", auth, uploadImage);

export default router;
