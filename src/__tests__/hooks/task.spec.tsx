import { renderHook, act } from "@testing-library/react-hooks";
import { TaskProvider, useTask } from "../../hooks/task";

describe("Task hook", () => {
  it("should be able to add task", () => {
    const { result } = renderHook(() => useTask(), {
      wrapper: TaskProvider,
    });

    act(() => {
      result.current.addActiveTask();
    });

    expect(result.current.activeTasks).toEqual([""]);
  });

  it("should be able to edit active task", () => {
    const { result } = renderHook(() => useTask(), {
      wrapper: TaskProvider,
    });

    act(() => {
      result.current.editActiveTask("Watch TV", 0);
    });

    expect(result.current.activeTasks[0]).toEqual("Watch TV");
  });

  it("should be able to change active task to done", () => {
    const { result } = renderHook(() => useTask(), {
      wrapper: TaskProvider,
    });

    act(() => {
      result.current.changeTaskToDone(0);
    });

    expect(result.current.activeTasks).toEqual([]);
    expect(result.current.doneTasks).toEqual(["Watch TV"]);
  });

  it("should be able to edit done task", () => {
    const { result } = renderHook(() => useTask(), {
      wrapper: TaskProvider,
    });

    act(() => {
      result.current.editDoneTask("Play soccer", 0);
    });

    expect(result.current.doneTasks[0]).toEqual("Play soccer");
  });

  it("should be able to change done task to active", () => {
    const { result } = renderHook(() => useTask(), {
      wrapper: TaskProvider,
    });

    act(() => {
      result.current.changeTaskToActive(0);
    });

    expect(result.current.doneTasks).toEqual([]);
    expect(result.current.activeTasks).toEqual(["Play soccer"]);
  });

  it("should be able to delete active task", () => {
    const { result } = renderHook(() => useTask(), {
      wrapper: TaskProvider,
    });

    act(() => {
      result.current.deleteActiveTask(0);
    });

    expect(result.current.activeTasks).toEqual([]);
  });

  it("should be able to delete done task", () => {
    const { result } = renderHook(() => useTask(), {
      wrapper: TaskProvider,
    });

    act(() => {
      result.current.addActiveTask();
    });

    act(() => {
      result.current.changeTaskToDone(0);
    });

    act(() => {
      result.current.deleteDoneTask(0);
    });

    expect(result.current.doneTasks).toEqual([]);
  });

  it("should restore saved data from storage when task inits", () => {
    jest.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
      switch (key) {
        case "@ToDoListWebApp:activeTasks":
          return JSON.stringify(["Eat an apple"]);
        case "@ToDoListWebApp:doneTasks":
          return JSON.stringify(["Call a friend", "Join a party"]);
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useTask(), {
      wrapper: TaskProvider,
    });

    expect(result.current.activeTasks).toEqual(["Eat an apple"]);
  });
});
