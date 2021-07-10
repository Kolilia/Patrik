import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import styles from "../css/createElementForm.module.css";
import Input from "./Input";
import Menu from "./Menu";
import ShowErrorText from "./ShowErrorText";

const CreatePossibleValue = ({
  setValue,
  options,
  setCreatePossibleValueForms,
  index,
}) => {
  const [success, setSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      label: "",
      value: "",
    },
    mode: "onChange",
    shouldUnregister: false,
  });

  const confirmAndContinue = (values) => {
    setValue("options", [
      ...options,
      { label: values?.label, value: values?.value },
    ]);

    setCreatePossibleValueForms((prevState) => [...prevState, index + 1]);
    setSuccess(true);
  };

  return (
    <div>
      <Input
        name="label"
        control={form.control}
        label="Label"
        rules={{ required: true }}
      />

      {form?.formState?.errors?.label?.type === "required" && (
        <ShowErrorText>Field is required</ShowErrorText>
      )}

      <div style={{ height: 10 }} />

      <Input
        name="value"
        control={form.control}
        label="Value"
        rules={{ required: true }}
      />

      {form?.formState?.errors?.value?.type === "required" && (
        <ShowErrorText>Field is required</ShowErrorText>
      )}

      <div style={{ height: 10 }} />

      <div className={styles.actions}>
        <button
          disabled={success}
          onClick={form.handleSubmit(confirmAndContinue)}
        >
          Add this possible value
        </button>
      </div>
    </div>
  );
};

const CreatePossibleValuesForElement = ({ setValue, control }) => {
  const [createPossibleValueForms, setCreatePossibleValueForms] = useState([1]);

  const options = useWatch({
    control: control,
    name: "options",
  });

  const mapForms = createPossibleValueForms.map((item) => {
    return (
      <CreatePossibleValue
        setValue={setValue}
        options={options}
        setCreatePossibleValueForms={setCreatePossibleValueForms}
        index={item}
        key={item}
      />
    );
  });

  return <div className={styles.possibleValuesForm}>{mapForms}</div>;
};

const CreateElementForm = ({
  setCurrentCreatedForm,
  id,
  setAllElementForms,
}) => {
  const [success, setSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      id: id,
      name: "",
      type: "Input",
      options: [],
      defaultValue: "",
      label: "",
    },
    mode: "onChange",
    shouldUnregister: false,
  });

  const typeElement = useWatch({
    control: form.control,
    name: "type",
  });

  const confirmAndContinue = (values) => {
    const defaultValueForCheckbox =
      values?.defaultValue?.toLowerCase() === "false" ? false : true;

    setCurrentCreatedForm((prevState) => {
      return {
        formElements: [
          ...prevState?.formElements,
          {
            id: values?.id || "",
            name: values?.name || "",
            type: values?.type || "Input",
            label: values?.label || "",
            options: values?.options || [],
          },
        ],
        defaultValues: {
          ...prevState?.defaultValues,
          [values?.name]:
            values?.type === "Checkbox"
              ? defaultValueForCheckbox
              : values?.defaultValue,
        },
      };
    });

    setAllElementForms((prevState) => [...prevState, id + 1]);

    setSuccess(true);
  };

  return (
    <div className={styles.mainContainer}>
      <Input
        name="label"
        control={form?.control}
        label="Choose label for form element"
      />

      <div style={{ height: 12 }} />

      <Input
        name="name"
        rules={{ required: true }}
        control={form?.control}
        label="Choose name for form element"
      />

      {form?.formState?.errors?.name?.type === "required" && (
        <ShowErrorText>Field is required</ShowErrorText>
      )}

      <div style={{ height: 12 }} />

      <Menu
        name="type"
        control={form.control}
        label="Choose type form element"
        setValue={form.setValue}
        options={[
          {
            label: "Radio",
            value: "Radio",
          },
          {
            label: "Checkbox",
            value: "Checkbox",
          },
          {
            label: "Input",
            value: "Input",
          },
          {
            label: "Menu",
            value: "Menu",
          },
        ]}
      />

      <div style={{ height: 12 }} />

      {(typeElement === "Menu" || typeElement === "Radio") && (
        <>
          <fieldset>
            <legend>
              Enter possible values for {typeElement} element form
            </legend>

            <CreatePossibleValuesForElement
              setValue={form.setValue}
              control={form.control}
            />
          </fieldset>

          <div style={{ height: 12 }} />
        </>
      )}

      <Input
        name="defaultValue"
        control={form?.control}
        label="Choose default value for  form element"
      />

      <div style={{ height: 12 }} />

      <div className={styles.actions}>
        <button
          disabled={success}
          onClick={form.handleSubmit(confirmAndContinue)}
        >
          Add element form
        </button>
      </div>
    </div>
  );
};

export default CreateElementForm;
