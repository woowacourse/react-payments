import { useReducer } from "react";

import FormContext from "../../context/card-add-form";

import {
  cardAddFormReducer,
  initialCardFormState,
} from "../providers/CardAddFormProvider.util";

import { StaticPropsWithChildren } from "../../types/components";

const FormProviderDecorator = ({ children }: StaticPropsWithChildren) => {
  const [formState, dispatch] = useReducer(
    cardAddFormReducer,
    initialCardFormState
  );

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProviderDecorator;
