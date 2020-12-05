import { useTask } from "../../hooks/task";

import Header from "../../components/Header";
import NoContent from "../../components/NoContent";
import AddButton from "../../components/AddButton";
import TaskCard from "../../components/TaskCard";

import { Container, Content, TaskListContainer, TaskList } from "./styles";

const Home: React.FC = () => {
  const { activeTasks, doneTasks } = useTask();

  return (
    <Container>
      <Content>
        <Header />
        <TaskListContainer>
          {!activeTasks.length && !doneTasks.length ? (
            <NoContent />
          ) : (
            <>
              <TaskList>
                <h2>Active Tasks ({activeTasks.length})</h2>
                {activeTasks.map((activeTask, index) => (
                  <TaskCard typeTask="active" task={activeTask} index={index} />
                ))}
                <AddButton />
              </TaskList>
              <TaskList>
                <h2>Tasks Done ({doneTasks.length})</h2>
                {doneTasks.map((doneTask, index) => (
                  <TaskCard typeTask="done" task={doneTask} index={index} />
                ))}
              </TaskList>
            </>
          )}
        </TaskListContainer>
      </Content>
    </Container>
  );
};

export default Home;
