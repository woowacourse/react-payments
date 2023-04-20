import React, { createContext, useState } from "react";
import { Validator } from "../type/validator";

const initialValue: any = {
  validCardNumber: null,
  validDate: null,
  validName: null,
  validCode: null,
  validPassword: null,
};

export const ValidateContext = createContext<{
  valid: any;
  changeValid: any;
}>({
  valid: initialValue,
  changeValid: (key: any, value: any) => {},
});

export function ValidateProvider({ children }: { children: React.ReactNode }) {
  const [valid, setValid] = useState<any>(initialValue);

  function changeValid(key: any, value: any) {
    const temp = valid;
    temp[key] = value;
    setValid(temp);
  }

  return (
    <ValidateContext.Provider value={{ valid, changeValid }}>
      {children}
    </ValidateContext.Provider>
  );
}
