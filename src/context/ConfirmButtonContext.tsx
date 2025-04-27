import { createContext, useContext, useState } from 'react';

type InputState = {
  isComplete: boolean;
  isVisible: boolean;
};

type ConfirmButtonContextType = {
  isActive: boolean;
  updateInputState: (input: string, updates: Partial<InputState>) => void;
  inputsState: Record<string, InputState>;
};

const ConfirmButtonContext = createContext<ConfirmButtonContextType | null>(
  null
);

export const ConfirmButtonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState(false);
  const [inputsState, setInputsState] = useState<Record<string, InputState>>({
    cardNumbers: { isComplete: false, isVisible: true },
    expiry: { isComplete: false, isVisible: false },
    CVC: { isComplete: false, isVisible: false },
    brand: { isComplete: false, isVisible: false },
    password: { isComplete: false, isVisible: false },
  });

  const updateInputState = (input: string, updates: Partial<InputState>) => {
    setInputsState((prev) => {
      const updatedState = {
        ...prev,
        [input]: {
          ...prev[input],
          ...updates,
        },
      };

      const allInputsComplete = Object.values(updatedState).every(
        (state) => state.isComplete
      );
      setIsActive(allInputsComplete);

      return updatedState;
    });
  };

  return (
    <ConfirmButtonContext.Provider
      value={{
        isActive,
        updateInputState,
        inputsState,
      }}
    >
      {children}
    </ConfirmButtonContext.Provider>
  );
};

export const useConfirmButton = () => {
  const context = useContext(ConfirmButtonContext);
  if (!context) {
    throw new Error('ConfirmButtonProvider 내부에 있어야 함');
  }
  return context;
};
