import { useTask } from "../../hooks/task";

import { Container } from "./styles";

import { FaPlus } from "react-icons/fa";

const AddButton: React.FC = () => {
  const { addActiveTask } = useTask();

  return (
    <Container>
      <button onClick={addActiveTask}>
        <FaPlus color="#000" />
      </button>
    </Container>
  );
};

export default AddButton;
