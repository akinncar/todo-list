import { Container } from "./styles";

import AddButton from "../AddButton";

const NoContent: React.FC = () => {
  return (
    <Container>
      <p>
        You don't have any tasks in your list, click in plus icon to add one!
      </p>
      <AddButton />
    </Container>
  );
};

export default NoContent;
