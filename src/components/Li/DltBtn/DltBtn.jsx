import React from "react";
import styles from "./dltButton.module.css";

const DltBtn = ({ onClick }) => {
  return <button className={styles.deleteBtn} onClick={onClick}></button>;
};

export default DltBtn;
