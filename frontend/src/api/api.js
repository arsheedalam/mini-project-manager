import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api"
});

// GET ALL Projects
export const getProjects = () =>
  API.get("/projects");

// CREATE Project
export const createProject = (data) =>
  API.post("/projects", data);

// UPDATE Project
export const updateProject = (id, data) =>
  API.put(`/projects/${id}`, data);

// DELETE Project
export const deleteProject = (id) =>
  API.delete(`/projects/${id}`);

// GET ALL TASKS
export const getTasks = () =>
  API.get("/tasks");

// CREATE TASK
export const createTask = (projectId, data) =>
  API.post(`/projects/${projectId}/tasks`, data);

// UPDATE TASK
export const updateTask = (id, data) =>
  API.put(`/tasks/${id}`, data);

// DELETE TASK
export const deleteTask = (id) =>
  API.delete(`/tasks/${id}`);