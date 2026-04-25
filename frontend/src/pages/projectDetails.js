import { useParams } from "react-router-dom";
import TaskList from "../components/taskList";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <div>
      <TaskList projectId={id} />
    </div>
  );
}

export default ProjectDetails;