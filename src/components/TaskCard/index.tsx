import { useDrag } from "react-dnd";

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

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", typeTask: typeTask, task: task, index: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

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
    <Container ref={dragRef} isDragging={isDragging}>
      <textarea
        placeholder="Edit task description..."
        value={task}
        onChange={(e) => editTask(e.target.value, index)}
      />
      <div>
        <button onClick={() => changeTaskStatus(index)}>
          {typeTask === "active" ? (
            <FaCheck color="#00b200" size={"1.20em"} />
          ) : (
            <FaUndo color="#f00" size={"1.20em"} />
          )}
        </button>
        <button onClick={() => deleteTask(index)}>
          <FaTrash color="#808080" size={"1.20em"} />
        </button>
      </div>
    </Container>
  );
};

export default TaskCard;
