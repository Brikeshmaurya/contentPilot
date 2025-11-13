import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import textRoutes from "./routes/textRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import batchRoutes from "./routes/batchRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("AutoContentX Backend Running...");
});

// API Routes
app.use("/api", textRoutes);
app.use("/api", imageRoutes);
app.use("/api", batchRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
