export const generatePayloadForm = (prevState, values) => {
  if (!prevState || !values) {
    return;
  }

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
      [values?.name]: values?.defaultValue,
    },
  };
};
