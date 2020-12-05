import { useTask } from "../../hooks/task";

import { Container } from "./styles";

import { FaCheck, FaUndo, FaTrash } from "react-icons/fa";

interface Props {
  typeTask: "active" | "done";
  task: string;
  index: number;
}

const TaskCard: React.FC<Props> = ({ typeTask, task, index }: Props) => {
  const {
    changeTaskToDone,
    changeTaskToActive,
    editActiveTask,
    editDoneTask,
    deleteActiveTask,
    deleteDoneTask,
  } = useTask();

  function editTask(text: string, index: number) {
    typeTask === "active"
      ? editActiveTask(text, index)
      : editDoneTask(text, index);
  }

  function changeTaskStatus(index: number) {
    typeTask === "active" ? changeTaskToDone(index) : changeTaskToActive(index);
  }

  function deleteTask(index: number) {
    typeTask === "active" ? deleteActiveTask(index) : deleteDoneTask(index);
  }

  return (
    <Container>
      <textarea
        placeholder="Edit task description..."
        value={task}
        onChange={(e) => editTask(e.target.value, index)}
      />
      <div>
        <button onClick={() => changeTaskStatus(index)}>
          {typeTask === "active" ? (
            <FaCheck color="#00b200" />
          ) : (
            <FaUndo color="#f00" />
          )}
        </button>
        <button onClick={() => deleteTask(index)}>
          <FaTrash color="#808080" />
        </button>
      </div>
    </Container>
  );
};

export default TaskCard;
