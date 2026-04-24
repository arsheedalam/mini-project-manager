import { useEffect, useState } from "react";
import { getProjects } from "../api/api";
import { Link } from "react-router-dom";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await getProjects();
    setProjects(res.data);
  };

  return (
    <div>
      {projects.map((p) => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <Link to={`/project/${p._id}`}>View Tasks</Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;