import { useState } from "react";
import { createTask } from "../api/api";

function TaskForm({ projectId }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return alert("Title required");

    await createTask(projectId, { title });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;