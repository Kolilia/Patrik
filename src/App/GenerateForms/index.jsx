import React, { useState } from "react";
import { generatePayloadForm } from "../../helpers/generatePayloadForm";
import Button from "../../System/Button";
import ShowErrorText from "../../System/ShowErrorText";
import CreateElementForm from "./CreateElementForm";
import styles from "./index.module.css";

const GenerateForms = ({ setAllForms }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [allElementsForms, setAllElementsForms] = useState([1]);

  const [currentCreatedForm, setCurrentCreatedForm] = useState({
    formElements: [],
    defaultValues: {},
  });

  const confirm = (values) => {
    if (!title) {
      setError("Title is required");
      return;
    } else {
      setError("");
    }

    setAllForms((prevState) => [
      ...prevState,
      {
        form: generatePayloadForm(currentCreatedForm, values),
        title: title,
      },
    ]);
  };

  const mapElementForms = allElementsForms
    ? allElementsForms.map((item) => {
        return (
          <CreateElementForm
            setCurrentCreatedForm={setCurrentCreatedForm}
            setAllElementForms={setAllElementsForms}
            confirmCallback={confirm}
            id={item}
            key={item}
          />
        );
      })
    : null;

  const reset = () => {
    setTitle("");
    setError("");
    setAllElementsForms(0);
    setCurrentCreatedForm({
      formElements: [],
      defaultValues: {},
    });

    setTimeout(() => {
      setAllElementsForms([1]);
    }, 0);
  };

  return (
    <div className={styles.root}>
      <h3 style={{ margin: 0 }}>Create form with patrik</h3>

      <div style={{ height: 15 }} />

      <label htmlFor="title">Title for this form</label>
      <input
        value={title}
        className={styles.input}
        onChange={(e) => {
          const { value } = e.target;

          if (!value) {
            setError("Title is required");
          } else {
            setError("");
          }

          setTitle(value);
        }}
        type="text"
        id="title"
        autoComplete="off"
      />

      <div style={{ height: 30 }} />

      {mapElementForms}

      <div style={{ height: 20 }} />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={reset}>Reset</Button>
      </div>

      <div style={{ height: 10 }} />

      {Boolean(error) && <ShowErrorText>{error}</ShowErrorText>}
    </div>
  );
};

export default GenerateForms;
