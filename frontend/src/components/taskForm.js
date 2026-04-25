import { useState } from "react";
import { createTask } from "../api/api";
import "../styles.css";

function TaskForm({ projectId, onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return alert("Title required");

    try {
      setLoading(true);

      const res = await createTask(projectId, {
        title,
        description,
        status,
      });

      // ✅ clear fields
      setTitle("");
      setDescription("");
      setStatus("todo");

      // ✅ update UI
      if (onTaskCreated) {
        onTaskCreated(res.data);
      }

    } catch (err) {
      console.error(err);
      alert("Error creating task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="form-input"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="todo">Todo</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button className="form-btn" disabled={loading}>
        {loading ? "Adding..." : "+ Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;