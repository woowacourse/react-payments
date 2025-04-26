import { createContext, useContext, useState } from 'react';

const ConfirmButtonContext = createContext<{
  isActive: boolean;
  setIsActive: (active: boolean) => void;
  checkInputsComplete: (input: string, isComplete: boolean) => void;
  updateDisplayInputs: (input: string, isComplete: boolean) => void;
  displayInputs: {
    cardNumbers: boolean;
    expiry: boolean;
    CVC: boolean;
    brand: boolean;
    password: boolean;
  };
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
  const [displayInputs, setDisplayInputs] = useState({
    cardNumbers: false,
    expiry: false,
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
      return updatedInputs;
    });
  };

  const updateDisplayInputs = (input: string, isComplete: boolean) => {
    setDisplayInputs((prev) => {
      const updatedInputs = {
        ...prev,
        [input]: isComplete,
      };
      return updatedInputs;
    });
  };

  return (
    <ConfirmButtonContext.Provider
      value={{
        isActive,
        setIsActive,
        checkInputsComplete,
        updateDisplayInputs,
        displayInputs,
      }}
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
