const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Create Task
router.post("/projects/:project_id/tasks", async (req, res) => {
  const task = await Task.create({
    ...req.body,
    project_id: req.params.project_id
  });
  res.json(task);
});

// Get Tasks (Filter + Sort)
router.get("/projects/:project_id/tasks", async (req, res) => {
  const { status, sort = "due_date" } = req.query;

  let filter = { project_id: req.params.project_id };
  if (status) filter.status = status;

  const tasks = await Task.find(filter).sort(sort);

  res.json(tasks);
});

// Update Task
router.put("/tasks/:id", async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Delete Task
router.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;