import React from "react";
import { useForm } from "react-hook-form";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import Menu from "./components/Menu";
import RadioButtons from "./components/RadioButtons";
import styles from "./css/showCurrentForm.module.css";

const ShowCurrentForm = ({ currentChooseItem, setCurrentChooseItem }) => {
  const form = useForm({
    defaultValues: currentChooseItem?.form?.defaultValues,
    mode: "onChange",
    shouldUnregister: false,
  });

  const mapForm = currentChooseItem?.form?.formElements?.map((item, index) => {
    if (item.type === "Input") {
      return (
        <>
          <Input
            control={form?.control}
            name={item?.name}
            label={item?.label}
            key={index}
          />

          <div style={{ height: 10 }} />
        </>
      );
    }

    if (item.type === "Radio") {
      return (
        <>
          <RadioButtons
            control={form?.control}
            name={item?.name}
            label={item?.label}
            options={item?.options}
            key={index}
          />

          <div style={{ height: 10 }} />
        </>
      );
    }

    if (item.type === "Checkbox") {
      return (
        <>
          <Checkbox
            control={form?.control}
            name={item?.name}
            label={item?.label}
            key={index}
          />
          <div style={{ height: 10 }} />
        </>
      );
    }

    if (item.type === "Menu") {
      return (
        <>
          <Menu
            control={form?.control}
            name={item?.name}
            label={item?.label}
            key={index}
            options={item?.options}
            setValue={form.setValue}
          />

          <div style={{ height: 10 }} />
        </>
      );
    }

    return null;
  });

  return (
    <div className={styles.mainContainer}>
      <h2>
        <b>Show form {currentChooseItem?.title}</b>
      </h2>

      <div>{mapForm}</div>

      <div style={{ height: 15 }} />

      <button onClick={() => setCurrentChooseItem(null)}>Clear</button>
    </div>
  );
};

export default ShowCurrentForm;
