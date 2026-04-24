import { useState } from "react";
import { createProject } from "../api/api";

function ProjectForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) return alert("Name required");

    await createProject({ name, description });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Create</button>
    </form>
  );
}

export default ProjectForm;