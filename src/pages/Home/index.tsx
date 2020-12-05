import { useTask } from "../../hooks/task";

import { FaCheck, FaTimes, FaPlus, FaTrash } from "react-icons/fa";

import {
  Container,
  Content,
  NoContent,
  Header,
  TaskListContainer,
  TaskList,
  TaskCard,
} from "./styles";

const Home: React.FC = () => {
  const {
    activeTasks,
    doneTasks,
    changeTaskToDone,
    changeTaskToActive,
    editActiveTask,
    editDoneTask,
    deleteActiveTask,
    deleteDoneTask,
    addActiveTask,
  } = useTask();

  return (
    <Container>
      <Content>
        <Header>
          <h1>Todo List</h1>
        </Header>
        <TaskListContainer>
          {!activeTasks.length && !doneTasks.length ? (
            <NoContent>
              <p>
                You don't have any tasks in your list, click in plus icon to add
                one!
              </p>
              <button onClick={addActiveTask}>
                <FaPlus color="#000" />
              </button>
            </NoContent>
          ) : (
            <>
              <TaskList>
                <h2>Active Tasks ({activeTasks.length})</h2>
                {activeTasks.map((activeTask, index) => (
                  <TaskCard>
                    <textarea
                      value={activeTask}
                      onChange={(e) => editActiveTask(e.target.value, index)}
                    />
                    <div>
                      <button onClick={() => changeTaskToDone(index)}>
                        <FaCheck color="#00b200" />
                      </button>
                      <button onClick={() => deleteActiveTask(index)}>
                        <FaTrash color="#808080" />
                      </button>
                    </div>
                  </TaskCard>
                ))}
                <button onClick={addActiveTask}>
                  <FaPlus color="#000" />
                </button>
              </TaskList>
              <TaskList>
                <h2>Tasks Done ({doneTasks.length})</h2>
                {doneTasks.map((doneTask, index) => (
                  <TaskCard>
                    <textarea
                      value={doneTask}
                      onChange={(e) => editDoneTask(e.target.value, index)}
                    />
                    <div>
                      <button onClick={() => changeTaskToActive(index)}>
                        <FaTimes color="#f00" />
                      </button>
                      <button onClick={() => deleteDoneTask(index)}>
                        <FaTrash color="#808080" />
                      </button>
                    </div>
                  </TaskCard>
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
