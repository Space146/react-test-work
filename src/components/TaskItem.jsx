import React from "react";
import CheckBox from "./Li/Checkbox/CheckBox";
import DltBtn from "./Li/DltBtn/DltBtn";

const TaskItem = ({ task, index, changeCheckbox, deleteBtn }) => {
  return (
    <li key={index}>
      <CheckBox checked={task.checked} onChange={() => changeCheckbox(index)} />
      <span style={{fontSize: '2vw', color: task.checked ? "#266559" : "#FFF" }}>
        {task.text}
      </span>
      <DltBtn onClick={() => deleteBtn(index)} />
    </li>
  );
};

export default TaskItem;
