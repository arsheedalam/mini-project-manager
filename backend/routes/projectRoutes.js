const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require("../controllers/projectController");

// ✅ CREATE PROJECT
router.post("/projects", createProject);

// ✅ GET ALL PROJECTS
router.get("/projects", getProjects);

// ✅ GET SINGLE PROJECT
router.get("/projects/:id", getProjectById);

// ✅ UPDATE PROJECT
router.put("/projects/:id", updateProject);

// ✅ DELETE PROJECT
router.delete("/projects/:id", deleteProject);

module.exports = router;