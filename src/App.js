import React from "react";
import { TaskProvider } from "./helpers/TaskContext";
import TodoList from "./page/TodoList";

const App = () => {
  return (
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  );
};

export default App;
