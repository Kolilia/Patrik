import React from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import RenderFormElement from "./RenderFormElement";

const ShowCurrentForm = ({ currentForm }) => {
  const form = useForm({
    defaultValues: currentForm?.form?.defaultValues,
    mode: "onChange",
    shouldUnregister: false,
  });

  const mapForm = currentForm?.form?.formElements?.map((item, index) => {
    return <RenderFormElement form={form} formElement={item} key={item?.id} />;
  });

  return (
    <div>
      <h4 className={styles.header}>
        <b>Title: {currentForm?.title}</b>
      </h4>

      <div style={{ height: 10 }} />

      <div>{mapForm}</div>
    </div>
  );
};

export default ShowCurrentForm;
