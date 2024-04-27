import React, { createContext, useContext, useState } from 'react';

export interface AddCardFormContextType {
  findStep: (name: CardInfoKeys) => number;
  curStep: number;
  setCurStep: React.Dispatch<React.SetStateAction<number>>;
  isFormValid: boolean;
  setFormValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCardFormContext =
  createContext<Nullable<AddCardFormContextType>>(null);

export function AddCardFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [curStep, setCurStep] = useState<number>(0);
  const [isFormValid, setFormValid] = useState(false);
  const steps: Array<keyof CardInfo> = [
    'cardNumbers',
    'cardIssuer',
    'expirationDate',
    'ownerName',
    'cvc',
    'password',
  ];
  const findStep = (name: CardInfoKeys) => {
    return steps.findIndex((step) => step === name);
  };

  const value = {
    findStep,
    curStep,
    setCurStep,
    isFormValid,
    setFormValid,
  };

  return (
    <AddCardFormContext.Provider value={value}>
      {children}
    </AddCardFormContext.Provider>
  );
}

export function useAddCardFormContext() {
  const context = useContext(AddCardFormContext);
  return context;
}
