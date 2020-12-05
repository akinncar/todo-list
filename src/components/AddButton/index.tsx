import { useTask } from "../../hooks/task";

import { Container } from "./styles";

import { FaPlus } from "react-icons/fa";

const AddButton: React.FC = () => {
  const { activeTasks, addActiveTask } = useTask();

  return (
    <Container hasTasks={activeTasks.length > 0}>
      <button onClick={addActiveTask}>
        <FaPlus color="#000" />
      </button>
    </Container>
  );
};

export default AddButton;
