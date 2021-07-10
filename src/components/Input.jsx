import React from "react";
import { useController } from "react-hook-form";

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
        style={{ width: "100%" }}
        {...field}
        id={label + name}
        type="text"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
