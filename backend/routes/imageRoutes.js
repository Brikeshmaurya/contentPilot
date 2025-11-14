import express from "express";
import { generateImage, generateBulkImages } from "../controllers/imageController.js";

const router = express.Router();

router.post("/generate-image", generateImage);
router.post("/generate-bulk-images", generateBulkImages);

export default router;
