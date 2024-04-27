import { useReducer } from "react";

import FormContext from "../../context/card-add-form";

import { StaticPropsWithChildren } from "../../types/components";

import {
  cardAddFormReducer,
  initialCardFormState,
} from "./CardAddFormProvider.util";

const CardAddFormProvider = ({ children }: StaticPropsWithChildren) => {
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

export default CardAddFormProvider;
