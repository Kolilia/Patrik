import React from "react";
import styles from "./index.module.css";

const ShowErrorText = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default ShowErrorText;
