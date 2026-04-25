const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

// ✅ CREATE TASK (inside a project)
router.post("/projects/:projectId/tasks", createTask);

// ✅ GET TASKS (by project + filters)
router.get("/projects/:projectId/tasks", getTasks);

// ✅ UPDATE TASK
router.put("/tasks/:id", updateTask);

// ✅ DELETE TASK
router.delete("/tasks/:id", deleteTask);

module.exports = router;