import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js"; // ⬅️ auth endpoints
import timetableRoutes from "./routes/Timetable.js"; // ⬅️ timetable CRUD endpoints
import noticeRoutes from "./routes/Notice.js";
import eventRoutes from "./routes/Event.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 CampusConnect server is running!");
});

// Health check route
app.get("/health", (req, res) => {
  const dbState = mongoose.connection.readyState; 
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  res.json({
    server: "✅ Running",
    database:
      dbState === 1
        ? "✅ Connected"
        : dbState === 2
        ? "🕒 Connecting"
        : "❌ Disconnected",
  });
});

// API Routes
app.use("/api/auth", authRoutes);         // ⬅️ register, login, profile
app.use("/api/timetable", timetableRoutes); // ⬅️ timetable CRUD routes
app.use("/api/notices", noticeRoutes);
app.use("/api/events", eventRoutes);
// MongoDB Connection and Server Start
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "campus_connect",
    });
    console.log("✅ MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

connectDB();
