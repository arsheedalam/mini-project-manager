import { useEffect, useState, useCallback } from "react";
import { getTasks, updateTask, deleteTask } from "../api/api";

function TaskList({ projectId }) {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  // ✅ FIX: wrap in useCallback
  const fetchTasks = useCallback(async () => {
    const res = await getTasks(projectId, status, "due_date");
    setTasks(res.data);
  }, [projectId, status]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]); // ✅ now safe

  const changeStatus = async (task, newStatus) => {
    await updateTask(task._id, { status: newStatus });
    fetchTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      {tasks.map((t) => (
        <div key={t._id}>
          <h4>{t.title}</h4>
          <p>Status: {t.status}</p>

          <button onClick={() => changeStatus(t, "done")}>
            Mark Done
          </button>

          <button onClick={() => removeTask(t._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;