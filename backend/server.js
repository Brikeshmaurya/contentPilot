import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"; 
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, ".env"),
});


// Import routes AFTER env loads
import textRoutes from "./routes/textRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", textRoutes);
app.use("/api", imageRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
