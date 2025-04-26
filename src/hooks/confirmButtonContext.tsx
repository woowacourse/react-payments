import { createContext, useContext, useState } from 'react';

const ConfirmButtonContext = createContext<{
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  checkInputsComplete: (input: string, isComplete: boolean) => void;
} | null>(null);

export const ConfirmButtonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [inputsComplete, setInputsComplete] = useState({
    cardNumbers: false,
    month: false,
    year: false,
    CVC: false,
    brand: false,
    password: false,
  });

  const checkInputsComplete = (input: string, isComplete: boolean) => {
    setInputsComplete((prev) => {
      const updatedInputs = {
        ...prev,
        [input]: isComplete,
      };
      const allInputsComplete = Object.values(updatedInputs).every(
        (value) => value === true
      );
      setIsActive(allInputsComplete);
      console.log(updatedInputs);
      return updatedInputs;
    });
  };

  return (
    <ConfirmButtonContext.Provider
      value={{ isActive, setIsActive, checkInputsComplete }}
    >
      {children}
    </ConfirmButtonContext.Provider>
  );
};

export const useConfirmButton = () => {
  const context = useContext(ConfirmButtonContext);
  if (!context) {
    throw new Error('useConfirmButton error');
  }
  return context;
};
