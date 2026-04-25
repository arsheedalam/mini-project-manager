const db = require("../config/db");

// ✅ CREATE TASK
exports.createTask = (req, res) => {
  const { title, description, status = "todo" } = req.body;
  const { projectId } = req.params; //

  if (!title) {
    return res.status(400).json({ error: "Title required" });
  }

  const sql = `
    INSERT INTO tasks (title, description, status, project_id)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [title, description, status, projectId], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      id: result.insertId,
      title,
      description,
      status,
      project_id: projectId
    });
  });
};


// ✅ GET TASKS (FILTER + SORT)
exports.getTasks = (req, res) => {
  const { projectId } = req.params;
  const { status, sort } = req.query;

  let sql = "SELECT * FROM tasks WHERE project_id = ?";
  let values = [projectId];

  // ✅ filter by status
  if (status) {
    sql += " AND status = ?";
    values.push(status);
  }

  // ✅ sort by due_date or created_at
  if (sort === "due_date") {
    sql += " ORDER BY due_date ASC";
  } else {
    sql += " ORDER BY created_at DESC";
  }

  db.query(sql, values, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};


// ✅ UPDATE TASK
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const sql = `
    UPDATE tasks 
    SET title = ?, description = ?, status = ?
    WHERE id = ?
  `;

  db.query(sql, [title, description, status, id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Task updated" });
  });
};


// ✅ DELETE TASK
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Task deleted" });
  });
};