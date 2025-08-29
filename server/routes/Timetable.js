import express from "express";
import Timetable from "../models/Timetable.js";
import { verifyToken } from "../middleware/authMiddleware.js"; // protect routes if needed

const router = express.Router();

// CREATE a timetable entry
router.post("/", verifyToken, async (req, res) => {
  try {
    const newEntry = new Timetable(req.body);
    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ all timetable entries
router.get("/", verifyToken, async (req, res) => {
  try {
    const entries = await Timetable.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ one timetable entry by ID
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const entry = await Timetable.findById(req.params.id);
    if (!entry) return res.status(404).json({ message: "Not found" });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE timetable entry by ID
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Timetable.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE timetable entry by ID
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await Timetable.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
