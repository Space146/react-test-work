import React from "react";
import "./Input.css";

const MainInput = (props) => {
  const { value, onChange } = props;
  return (
    <input
      className="main_input"
      type="text"
      placeholder="Add a new task"
      value={value}
      onChange={onChange}
    />
  );
};

export default MainInput;
