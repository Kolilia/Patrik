import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Button from "../../../../System/Button";
import Input from "../../../../System/Input";
import ShowErrorText from "../../../../System/ShowErrorText";
import styles from "./index.module.css";

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

  const confirmAndEnd = (values) => {
    setValue("options", [
      ...options,
      { label: values?.label, value: values?.value },
    ]);

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

      {!success && (
        <div className={styles.actions}>
          <Button onClick={form.handleSubmit(confirmAndEnd)}>
            Add and end
          </Button>

          <div style={{ width: 5 }} />

          <Button onClick={form.handleSubmit(confirmAndContinue)}>
            Add and start new
          </Button>
        </div>
      )}
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

export default CreatePossibleValuesForElement;
