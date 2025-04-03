import React from "react";
import "../components/MyInput/Input.css";
import TaskForm from "../components/TaskForm";
import "../components/submit-button/subbtn.css";
import "../styles/App.css";
import TaskList from "../components/TaskList";

function TodoList() {
  return (
    <div>
      <h1 style={{ fontFamily: "Alfa Slab One", fontSize: "3.5vw" }}>
        All
        <span
          style={{
            fontFamily: "Alfa Slab One",
            color: "#266559",
            fontSize: "3.5vw",
            marginLeft: "10px",
          }}
        >
          Tasks
        </span>
      </h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default TodoList;
