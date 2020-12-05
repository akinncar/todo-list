import { act } from "@testing-library/react";
import { useState, useEffect } from "react";

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
  const [activeTasks, setActiveTasks] = useState([]);

  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {}, []);

  function changeTaskToDone(index) {
    setDoneTasks([...doneTasks, activeTasks[index]]);

    let newActiveTasks = activeTasks.slice();
    newActiveTasks.splice(index, 1);
    setActiveTasks(newActiveTasks);
  }

  function changeTaskToActive(index) {
    setActiveTasks([...activeTasks, doneTasks[index]]);

    let newDoneTasks = doneTasks.slice();
    newDoneTasks.splice(index, 1);
    setDoneTasks(newDoneTasks);
  }

  function editActiveTask(text, index) {
    let newActiveTasks = activeTasks.slice();
    newActiveTasks[index] = text;
    setActiveTasks(newActiveTasks);
  }

  function editDoneTask(text, index) {
    let newDoneTask = doneTasks.slice();
    newDoneTask[index] = text;
    setDoneTasks(newDoneTask);
  }

  function deleteActiveTask(index) {
    let newActiveTasks = activeTasks.slice();
    newActiveTasks.splice(index, 1);
    setActiveTasks(newActiveTasks);
  }

  function deleteDoneTask(index) {
    let newDoneTasks = doneTasks.slice();
    newDoneTasks.splice(index, 1);
    setDoneTasks(newDoneTasks);
  }

  function addActiveTask() {
    setActiveTasks([...activeTasks, ""]);
  }

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
