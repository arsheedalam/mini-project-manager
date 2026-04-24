import { useParams } from "react-router-dom";
import TaskForm from "../components/taskForm";
import TaskList from "../components/taskList";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Tasks</h2>
      <TaskForm projectId={id} />
      <TaskList projectId={id} />
    </div>
  );
}

export default ProjectDetails;