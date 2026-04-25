import { useEffect, useState, useCallback } from "react";
import { getTasks, updateTask, deleteTask } from "../api/api";
import { useParams } from "react-router-dom";
import TaskForm from "./taskForm";
import "../styles.css";

function TaskList() {
  const { id } = useParams(); // ✅ projectId from URL

  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  const fetchTasks = useCallback(async () => {
    try {
      const res = await getTasks(); // backend simple
      let data = res.data;

      // ✅ filter by project
      data = data.filter((t) => t.project_id === id);

      // ✅ filter by status
      if (status) {
        data = data.filter((t) => t.status === status);
      }

      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  }, [status, id]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const changeStatus = async (task, newStatus) => {
    await updateTask(task.id, { ...task, status: newStatus });
    fetchTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="container">
      <h2 className="title">Tasks</h2>

      {/* ✅ Task Form */}
      <div className="form-wrapper">
        <TaskForm
          projectId={id}
          onTaskCreated={(newTask) => {
            setTasks((prev) => [...prev, newTask]);
          }}
        />
      </div>

      {/* ✅ Filter */}
      <div className="filter-bar">
        <select
          className="form-input"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="todo">Todo</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      {/* ✅ Task List */}
      <div className="task-list">
        {tasks.map((t) => (
          <div className="task-card" key={t.id}>
            <h4 className="task-title">{t.title}</h4>
            <p className="task-desc">{t.description}</p>

            <div className="task-actions">
              <span className={`status ${t.status}`}>
                {t.status}
              </span>

              <div className="btn-group">
                <button
                  className="done-btn"
                  onClick={() => changeStatus(t, "done")}
                >
                  ✔ Done
                </button>

                <button
                  className="delete-btn"
                  onClick={() => removeTask(t.id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;