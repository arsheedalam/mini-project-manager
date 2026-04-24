const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Create Project
router.post("/", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Projects (Pagination)
router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const projects = await Project.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(projects);
});

// Get Single Project
router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
});

// Delete Project
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;