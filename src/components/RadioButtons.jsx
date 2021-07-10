import React from "react";
import { useController } from "react-hook-form";

const RadioButtons = ({ name, control, rules, options, label }) => {
  const { field } = useController({
    name: name,
    control: control,
    rules: rules,
  });

  const radioButtons = options.map((item, index) => {
    return (
      <>
        <label for={index}>{item?.label}</label>

        <div style={{ width: 1 }} />

        <input {...field} value={item?.value} type="radio" />

        <div style={{ width: 5 }} />
      </>
    );
  });

  return (
    <div>
      <h4 style={{ margin: 0, textAlign: "center" }}>
        <b>{label}</b>
      </h4>

      <div style={{ display: "flex" }}>{radioButtons}</div>
    </div>
  );
};

export default RadioButtons;
