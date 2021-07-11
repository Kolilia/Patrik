import React from "react";
import { useController } from "react-hook-form";
import styles from "./index.module.css";

const Input = ({ name, control, rules, label }) => {
  const { field } = useController({
    name: name,
    control: control,
    rules: rules,
  });

  return (
    <div>
      <label htmlFor={label + name}>{label}</label>
      <input
        className={styles.root}
        {...field}
        id={label + name}
        type="text"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
