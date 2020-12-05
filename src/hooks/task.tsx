import React, { createContext, useContext, useState, useEffect } from "react";

interface TaskContextData {
  activeTasks: Array<string>;
  doneTasks: Array<string>;
  changeTaskToDone(index: number): void;
  changeTaskToActive(index: number): void;
  editActiveTask(text: string, index: number): void;
  editDoneTask(text: string, index: number): void;
  deleteActiveTask(index: number): void;
  deleteDoneTask(index: number): void;
  addActiveTask(): void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

const TaskProvider: React.FC = ({ children }) => {
  const initialActiveTasks =
    JSON.parse(localStorage.getItem("activeTasks")) || [];
  const initialDoneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];

  const [activeTasks, setActiveTasks] = useState<Array<string>>(
    initialActiveTasks
  );
  const [doneTasks, setDoneTasks] = useState<Array<string>>(initialDoneTasks);

  useEffect(() => {
    localStorage.setItem("activeTasks", JSON.stringify(activeTasks));
  }, [activeTasks]);

  useEffect(() => {
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [doneTasks]);

  function changeTaskToDone(index: number): void {
    setDoneTasks([...doneTasks, activeTasks[index]]);

    let newActiveTasks = activeTasks.slice();
    newActiveTasks.splice(index, 1);
    setActiveTasks(newActiveTasks);
  }

  function changeTaskToActive(index: number): void {
    setActiveTasks([...activeTasks, doneTasks[index]]);

    let newDoneTasks = doneTasks.slice();
    newDoneTasks.splice(index, 1);
    setDoneTasks(newDoneTasks);
  }

  function editActiveTask(text: string, index: number): void {
    let newActiveTasks = activeTasks.slice();
    newActiveTasks[index] = text;
    setActiveTasks(newActiveTasks);
  }

  function editDoneTask(text: string, index: number): void {
    let newDoneTask = doneTasks.slice();
    newDoneTask[index] = text;
    setDoneTasks(newDoneTask);
  }

  function deleteActiveTask(index: number): void {
    let newActiveTasks = activeTasks.slice();
    newActiveTasks.splice(index, 1);
    setActiveTasks(newActiveTasks);
  }

  function deleteDoneTask(index: number): void {
    let newDoneTasks = doneTasks.slice();
    newDoneTasks.splice(index, 1);
    setDoneTasks(newDoneTasks);
  }

  function addActiveTask(): void {
    setActiveTasks([...activeTasks, ""]);
  }

  return (
    <TaskContext.Provider
      value={{
        activeTasks,
        doneTasks,
        changeTaskToDone,
        changeTaskToActive,
        editActiveTask,
        editDoneTask,
        deleteActiveTask,
        deleteDoneTask,
        addActiveTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

function useTask(): TaskContextData {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask need a TaskProvider");
  }
  return context;
}

export { TaskProvider, useTask };
