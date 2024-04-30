import { useContext } from "react";
import FormContext from "../context/card-add-form";

import { FormAction } from "../components/providers/CardAddFormProvider/cardAddFormReducer";

import { CardAddFormState, CardFormField } from "../types/card";

const useCardAddFormField = <T extends CardFormField>(
  field: T
): {
  formFieldState: CardAddFormState[T];
  isValidFormField: boolean;
  handleFormFieldFocus: () => void;
  dispatch: React.Dispatch<FormAction>;
} => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  const { formState, dispatch } = context;

  const isValidFormField = Object.values(formState[field].errorState).every(
    (isValid) => !isValid
  );

  const handleFormFieldFocus = () => {
    if (formState[field].displayed) return;

    dispatch({
      type: "SET_DISPLAY",
      field,
    });
  };

  return {
    formFieldState: formState[field],
    isValidFormField,
    handleFormFieldFocus,
    dispatch,
  };
};

export default useCardAddFormField;
