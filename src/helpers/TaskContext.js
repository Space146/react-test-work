import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [inputValue, setInputValue] = useState("");

  const saveToLocalStorage = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const submitBtn = (e) => {
    e.preventDefault();
    const newTaskIndex = tasks.length;
    saveToLocalStorage([
      ...tasks,
      { index: newTaskIndex, text: inputValue, checked: false },
    ]);
    setInputValue("");
  };

  const deleteBtn = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    saveToLocalStorage(newTasks);
  };

  const changeCheckbox = (index) => {
    saveToLocalStorage(
      tasks.map((task, i) =>
        i === index ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        inputValue,
        handleChange,
        submitBtn,
        deleteBtn,
        changeCheckbox,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
