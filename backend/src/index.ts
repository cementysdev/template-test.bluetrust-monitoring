import "dotenv/config";
import express from "express";
import cors from "cors";
import pool from "./config/db.js";

const app = express();
const PORT = process.env["PORT"] ?? 3001;

app.use(cors());
app.use(express.json());

app.get("/health", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "ok", time: result.rows[0]?.["now"] });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Database connection failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
