import React from "react";
import styles from "./index.module.css";

const Button = ({ onClick, disabled, children }) => {
  return (
    <button
      className={styles.root}
      onClick={onClick}
      disabled={disabled}
      children={children}
    >
      {children}
    </button>
  );
};

export default Button;
