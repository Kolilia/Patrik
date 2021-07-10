import React from "react";
import { useController } from "react-hook-form";

const Checkbox = ({ name, control, rules, label }) => {
  const { field } = useController({
    name: name,
    control: control,
    rules: rules,
  });

  return (
    <>
      <label for={name + label}>{label}</label>
      <div style={{ width: 2 }} />
      <input {...field} id={name + label} type="checkbox" autoComplete="off" />
    </>
  );
};

export default Checkbox;
