import React, { useState } from "react";
import CreateElementForm from "./components/CreateElementForm";
import ShowErrorText from "./components/ShowErrorText";

const GenerateForms = ({ setAllForms, setCurrentChooseItem }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [allElementsForms, setAllElementsForms] = useState([1]);

  const [currentCreatedForm, setCurrentCreatedForm] = useState({
    formElements: [],
    defaultValues: {},
  });

  const mapElementForms = allElementsForms
    ? allElementsForms.map((item) => {
        return (
          <CreateElementForm
            setCurrentCreatedForm={setCurrentCreatedForm}
            setAllElementForms={setAllElementsForms}
            id={item}
            key={item}
          />
        );
      })
    : null;

  const confirm = () => {
    if (allElementsForms.length === 1) {
      setError("Create at least one form element");
      return;
    } else {
      setError("");
    }

    if (!title) {
      setError("Title is required");
      return;
    } else {
      setError("");
    }

    setCurrentChooseItem({ form: currentCreatedForm, title: title });

    setAllForms((prevState) => [
      ...prevState,
      { form: currentCreatedForm, title: title },
    ]);
  };

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
    }, 200);
  };

  return (
    <div>
      <fieldset>
        <legend>Create form with patrik</legend>

        <label htmlFor="title">Title for this form</label>

        <input
          value={title}
          style={{ width: "100%" }}
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
          <button onClick={reset}>Reset form and create new</button>

          <div style={{ width: 5 }} />

          <button onClick={confirm}>Create form</button>
        </div>

        <div style={{ height: 10 }} />

        {Boolean(error) && <ShowErrorText>{error}</ShowErrorText>}
      </fieldset>
    </div>
  );
};

export default GenerateForms;
