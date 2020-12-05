import { useState } from "react";
import { useDrop, DragObjectWithType } from "react-dnd";

import { useTask } from "../../hooks/task";

import Header from "../../components/Header";
import NoContent from "../../components/NoContent";
import AddButton from "../../components/AddButton";
import TaskCard from "../../components/TaskCard";

import { Container, Content, TaskListContainer, TaskList } from "./styles";

interface Props {
  typeTask: "active" | "done";
  task: string;
  index: number;
}

const Home: React.FC = () => {
  const {
    activeTasks,
    doneTasks,
    changeTaskToActive,
    changeTaskToDone,
  } = useTask();

  const [canDropActive, setCanDropActive] = useState<boolean>(false);
  const [canDropDone, setCanDropDone] = useState<boolean>(false);

  const [, dopActiveRef] = useDrop({
    accept: "CARD",
    hover: (item, monitor) => {
      setCanDropActive(true);
      setCanDropDone(false);
    },
    drop(item: DragObjectWithType & Props, monitor) {
      if (item.typeTask === "done") {
        changeTaskToActive(item.index);
      }
      setCanDropActive(false);
    },
  });

  const [, dropDoneRef] = useDrop({
    accept: "CARD",
    hover: (item, monitor) => {
      setCanDropDone(true);
      setCanDropActive(false);
    },
    drop(item: DragObjectWithType & Props, monitor) {
      if (item.typeTask === "active") {
        changeTaskToDone(item.index);
      }
      setCanDropDone(false);
    },
  });

  return (
    <Container>
      <Content>
        <Header />
        <TaskListContainer>
          {!activeTasks.length && !doneTasks.length ? (
            <NoContent />
          ) : (
            <>
              <TaskList ref={dopActiveRef} isDragging={canDropActive}>
                <h2>Active Tasks ({activeTasks.length})</h2>
                {activeTasks.length > 0 && (
                  <section>
                    {activeTasks.map((activeTask, index) => (
                      <TaskCard
                        key={index}
                        typeTask="active"
                        task={activeTask}
                        index={index}
                      />
                    ))}
                  </section>
                )}
                <AddButton />
              </TaskList>
              <TaskList ref={dropDoneRef} isDragging={canDropDone}>
                <h2>Done Tasks ({doneTasks.length})</h2>
                <section>
                  {doneTasks.map((doneTask, index) => (
                    <TaskCard
                      key={index}
                      typeTask="done"
                      task={doneTask}
                      index={index}
                    />
                  ))}
                </section>
              </TaskList>
            </>
          )}
        </TaskListContainer>
      </Content>
    </Container>
  );
};

export default Home;
