import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { generatePayloadForm } from "../../../../helpers/generatePayloadForm";
import Button from "../../../../System/Button";
import Input from "../../../../System/Input";
import Menu from "../../../../System/Menu";
import RadioButtons from "../../../../System/RadioButtons";
import ShowErrorText from "../../../../System/ShowErrorText";
import CreatePossibleValuesForElement from "./CreatePossibleValuesForElement";
import styles from "./index.module.css";

const CreateElementForm = ({
  setCurrentCreatedForm,
  id,
  setAllElementForms,
  confirmCallback,
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
    setCurrentCreatedForm((prevState) => {
      return generatePayloadForm(prevState, values);
    });

    setAllElementForms((prevState) => [...prevState, id + 1]);

    setSuccess(true);
  };

  const confirmAndEnd = (values) => {
    setCurrentCreatedForm((prevState) => {
      return generatePayloadForm(prevState, values);
    });

    setSuccess(true);

    confirmCallback(values);
  };

  const { setValue } = form;

  useEffect(() => {
    setTimeout(() => setValue("defaultValue", ""));
  }, [setValue, typeElement]);

  return (
    <div className={styles.root}>
      <Input name="label" control={form?.control} label="Label" />

      <div style={{ height: 12 }} />

      <Input
        name="name"
        rules={{ required: true }}
        control={form?.control}
        label="Name"
      />

      {form?.formState?.errors?.name?.type === "required" && (
        <ShowErrorText>Field is required</ShowErrorText>
      )}

      <div style={{ height: 12 }} />

      <Menu
        name="type"
        control={form.control}
        label="Type"
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
          <div className={styles.container}>
            <h4 className={styles.header}>Add possible values</h4>

            <CreatePossibleValuesForElement
              setValue={form.setValue}
              control={form.control}
            />
          </div>
        </>
      )}

      {typeElement === "Checkbox" ? (
        <RadioButtons
          name="defaultValue"
          control={form?.control}
          options={[
            {
              label: "True",
              value: true,
            },
            {
              label: "False",
              value: false,
            },
          ]}
          label="Default value"
        />
      ) : (
        <Input
          name="defaultValue"
          control={form?.control}
          label="Default value"
        />
      )}

      <div style={{ height: 12 }} />

      {!success && (
        <div className={styles.actions}>
          <Button onClick={form.handleSubmit(confirmAndEnd)}>
            Add and save form
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

export default CreateElementForm;
