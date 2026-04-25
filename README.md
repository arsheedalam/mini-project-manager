# 📌 Project Management App

A full-stack Project & Task Management application built using React, Node.js, Express, and MySQL.

---

## 🚀 Features

* Create, update, delete Projects
* Create, update, delete Tasks
* Assign tasks to specific projects
* Filter tasks by status (Todo, In Progress, Done)
* Clean and responsive UI

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MySQL

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/arsheedalam/mini-project-manager/
cd mini-project-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=8000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=project_db
```

Start server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🗄 Database Schema

### Projects Table

```sql
CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT
);
```

### Tasks Table

```sql
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  status VARCHAR(50),
  project_id INT,
  FOREIGN KEY (project_id) REFERENCES projects(id)
);
```

---

## 🌐 API Base URL

```
http://localhost:8000/api
```

---

## 📦 Folder Structure

```
project-management-app/
│
├── backend/
├── frontend/
└── README.md
```

---

## 👨‍💻 Author

Arsheed Alam
