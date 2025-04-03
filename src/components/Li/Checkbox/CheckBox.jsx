import React from "react";
import "./checkbox.css";

const CheckBox = (props) => {
  const { checked, onChange } = props;
  return (
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
