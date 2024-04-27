import { createContext } from "react";
import { CardAddFormState, FormAction } from "../types/card";

interface FormContextType {
  formState: CardAddFormState;
  dispatch: React.Dispatch<FormAction>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export default FormContext;
