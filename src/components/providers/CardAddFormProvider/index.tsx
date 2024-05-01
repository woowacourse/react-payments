import { useReducer } from "react";
import { Outlet } from "react-router-dom";

import FormContext from "../../../context/card-add-form";

import { cardAddFormReducer, initialCardFormState } from "./cardAddFormReducer";
import CardPageLayout from "../../layout/CardPageLayout";

const CardAddFormProvider = () => {
  const [formState, dispatch] = useReducer(
    cardAddFormReducer,
    initialCardFormState
  );

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      <CardPageLayout>
        <Outlet />
      </CardPageLayout>
    </FormContext.Provider>
  );
};

export default CardAddFormProvider;
