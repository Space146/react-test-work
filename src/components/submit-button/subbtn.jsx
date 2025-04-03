import React from "react";
import "./subbtn.css";

const SubBtn = ({ type, onClick }) => {
  return <button type={type} onClick={onClick} className="Subbtn"></button>;
};

export default SubBtn;
