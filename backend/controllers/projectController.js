const db = require("../config/db");


// ✅ CREATE PROJECT
exports.createProject = (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Project name is required" });
  }

  const sql = "INSERT INTO projects (name, description) VALUES (?, ?)";

  db.query(sql, [name, description], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    // ✅ IMPORTANT (for frontend update)
    res.json({
      id: result.insertId,
      name,
      description
    });
  });
};


// ✅ GET ALL PROJECTS
exports.getProjects = (req, res) => {
  const sql = "SELECT * FROM projects ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    res.json(results);
  });
};


// ✅ GET SINGLE PROJECT
exports.getProjectById = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM projects WHERE id = ?";

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(results[0]);
  });
};


// ✅ UPDATE PROJECT
exports.updateProject = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const sql = "UPDATE projects SET name = ?, description = ? WHERE id = ?";

  db.query(sql, [name, description, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    res.json({ message: "Project updated successfully" });
  });
};


// ✅ DELETE PROJECT
exports.deleteProject = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM projects WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    res.json({ message: "Project deleted successfully" });
  });
};