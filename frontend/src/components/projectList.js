import { useEffect, useState } from "react";
import { getProjects } from "../api/api.js";
import { Link } from "react-router-dom";
import ProjectForm from "./projectForm";
import "../styles.css"; // ✅ import CSS

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Projects</h1>

      {/* FORM */}
      <div className="form-wrapper">
        <ProjectForm
          onProjectCreated={(newProject) => {
            setProjects((prev) => [...prev, newProject]);
          }}
        />
      </div>

      {/* PROJECT LIST */}
      <div className="project-list">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <h3 className="project-title">{p.name}</h3>
            <p className="project-desc">{p.description}</p>

            <Link className="view-btn" to={`/project/${p.id}`}>
              View Tasks
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;