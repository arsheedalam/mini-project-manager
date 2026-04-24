import ProjectForm from "../components/projectForm";
import ProjectList from "../components/projectList";

function Home() {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

export default Home;