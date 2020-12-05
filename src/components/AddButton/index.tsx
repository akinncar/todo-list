import { useTask } from "../../hooks/task";

import { Container } from "./styles";

import { FaPlus } from "react-icons/fa";

const AddButton: React.FC = () => {
  const { addActiveTask } = useTask();

  return (
    <Container onClick={addActiveTask}>
      <FaPlus color="#000" />
    </Container>
  );
};

export default AddButton;
