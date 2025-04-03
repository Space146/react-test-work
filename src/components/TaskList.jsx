import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../helpers/useTasks";

const TaskList = () => {
  const { tasks, deleteBtn, changeCheckbox } = useTasks();

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          changeCheckbox={changeCheckbox}
          deleteBtn={deleteBtn}
        />
      ))}
    </ul>
  );
};

export default TaskList;
