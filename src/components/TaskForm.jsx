import React from "react";
import MainInput from "./MyInput/MainInput";
import SubBtn from "./submit-button/subbtn";
import { useTasks } from "../helpers/useTasks";

const TaskForm = () => {
  const { inputValue, handleChange, submitBtn } = useTasks();

  return (
    <form>
      <MainInput value={inputValue} onChange={handleChange} />
      <SubBtn type="submit" onClick={submitBtn} />
    </form>
  );
};

export default TaskForm;
