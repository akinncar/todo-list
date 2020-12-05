import { act } from "@testing-library/react";
import { useState, useEffect } from "react";

import { FaCheck, FaTimes } from "react-icons/fa";

import {
  Container,
  Content,
  Header,
  TaskListContainer,
  TaskList,
  Task,
} from "./styles";

const Home: React.FC = () => {
  const [activeTasks, setActiveTasks] = useState([]);

  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    setActiveTasks([
      "I want to make coffe to my friends",
      "Drink to much, to much",
      "Call her",
    ]);

    setDoneTasks(["Develop an app", "Eat an apple"]);
  }, []);

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

  return (
    <Container>
      <Content>
        <Header>
          <h1>Todo List</h1>
        </Header>
        <TaskListContainer>
          <TaskList>
            <h2>Active Tasks</h2>
            {activeTasks.map((activeTask, index) => (
              <Task>
                <p>{activeTask}</p>
                <div>
                  <button onClick={() => changeTaskToDone(index)}>
                    <FaCheck color="#00b200 " />
                  </button>
                </div>
              </Task>
            ))}
          </TaskList>
          <TaskList>
            <h2>Tasks Done</h2>
            {doneTasks.map((doneTask, index) => (
              <Task>
                <p>{doneTask}</p>
                <div>
                  <button onClick={() => changeTaskToActive(index)}>
                    <FaTimes color="#f00" />
                  </button>
                </div>
              </Task>
            ))}
          </TaskList>
        </TaskListContainer>
      </Content>
    </Container>
  );
};

export default Home;
