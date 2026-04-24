import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getProjects = (page = 1) =>
  API.get(`/projects?page=${page}&limit=10`);

export const createProject = (data) =>
  API.post("/projects", data);

export const getTasks = (projectId, status, sort) =>
  API.get(`/projects/${projectId}/tasks`, {
    params: { status, sort }
  });

export const createTask = (projectId, data) =>
  API.post(`/projects/${projectId}/tasks`, data);

export const updateTask = (id, data) =>
  API.put(`/tasks/${id}`, data);

export const deleteTask = (id) =>
  API.delete(`/tasks/${id}`);