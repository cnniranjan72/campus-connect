import express from "express";
import Notice from "../models/Notice.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all notices
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create notice (protected)
router.post("/", verifyToken, async (req, res) => {
  const newNotice = new Notice(req.body);
  try {
    const saved = await newNotice.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET single notice
router.get("/:id", async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice) return res.status(404).json({ message: "Not found" });
    res.json(notice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT update notice (protected)
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE notice (protected)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
