import { useShowForm } from "../../../../../hooks/useShowForm";

const RenderFormElement = ({ form, formElement }) => {
  const [element] = useShowForm(form, formElement);

  return element;
};

export default RenderFormElement;
