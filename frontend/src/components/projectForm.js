import { useState } from "react";
import { createProject } from "../api/api";
import "../styles.css";

function ProjectForm({ onProjectCreated }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await createProject({ name, description });

      onProjectCreated(res.data);

      setName("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-input"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="form-btn" type="submit">
        + Create Project
      </button>
    </form>
  );
}

export default ProjectForm;