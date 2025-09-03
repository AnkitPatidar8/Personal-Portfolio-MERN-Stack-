const express = require("express");
const Education = require("../models/Education");
const Experience = require("../models/Experience");

const router = express.Router();

/* ---------- EDUCATION ROUTES ---------- */
// GET all education
router.get("/education", async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST add education
router.post("/education", async (req, res) => {
  try {
    const edu = new Education(req.body);
    await edu.save();
    res.status(201).json(edu);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update education
router.put("/education/:id", async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE education
router.delete("/education/:id", async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: "Education deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


/* ---------- EXPERIENCE ROUTES ---------- */
// GET all experience
router.get("/experience", async (req, res) => {
  try {
    const exp = await Experience.find();
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST add experience
router.post("/experience", async (req, res) => {
  try {
    const exp = new Experience(req.body);
    await exp.save();
    res.status(201).json(exp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update experience
router.put("/experience/:id", async (req, res) => {
  try {
    const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE experience
router.delete("/experience/:id", async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: "Experience deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
