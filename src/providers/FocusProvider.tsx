import { ReactNode, createContext, useContext, useState } from 'react';

type ValidFocusName = 'CVCNumberInput';

type FocusContextType = {
  focusedInputId: ValidFocusName | null;
  setFocusedInputId: (inputId: ValidFocusName | null) => void;
};

const FocusContext = createContext<FocusContextType>({
  focusedInputId: null,
  setFocusedInputId: () => {},
});

export const useFocusContext = () => {
  const context = useContext(FocusContext);

  return context;
};

interface FocusProvider {
  children: ReactNode;
}

export const FocusProvider = ({ children }: FocusProvider) => {
  const [focusedInputId, setFocusedInputId] = useState<ValidFocusName | null>(null);

  return <FocusContext.Provider value={{ focusedInputId, setFocusedInputId }}>{children}</FocusContext.Provider>;
};
