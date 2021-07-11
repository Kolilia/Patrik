import React, { useCallback, useEffect, useState } from "react";
import Checkbox from "../System/Checkbox";
import Input from "../System/Input";
import Menu from "../System/Menu";
import RadioButtons from "../System/RadioButtons";

export const useShowForm = (form, formElement) => {
  const [element, setElement] = useState(null);

  const showElementForm = useCallback(() => {
    if (!form || !formElement) {
      return;
    }

    if (formElement.type === "Input") {
      setElement(
        <>
          <Input
            control={form?.control}
            name={formElement?.name}
            label={formElement?.label}
          />

          <div style={{ height: 10 }} />
        </>
      );
    } else if (formElement.type === "Radio") {
      setElement(
        <>
          <RadioButtons
            control={form?.control}
            name={formElement?.name}
            label={formElement?.label}
            options={formElement?.options}
          />

          <div style={{ height: 10 }} />
        </>
      );
    } else if (formElement.type === "Checkbox") {
      setElement(
        <>
          <Checkbox
            control={form?.control}
            name={formElement?.name}
            label={formElement?.label}
          />
          <div style={{ height: 10 }} />
        </>
      );
    } else if (formElement.type === "Menu") {
      setElement(
        <>
          <Menu
            control={form?.control}
            name={formElement?.name}
            label={formElement?.label}
            options={formElement?.options}
            setValue={form.setValue}
          />

          <div style={{ height: 10 }} />
        </>
      );
    } else {
      setElement(null);
    }
  }, [form, formElement]);

  useEffect(() => {
    showElementForm();
  }, [showElementForm]);

  return [element];
};
