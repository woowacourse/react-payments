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

  if (!context) {
    throw new Error('컨텍스트없음');
  }

  return context;
};

interface FocusProvider {
  children: ReactNode;
}

export const FocusProvider = ({ children }: FocusProvider) => {
  const [focusedInputId, setFocusedInputId] = useState<string | null>(null);

  // context의 value로 상태 및 업데이트 함수를 제공합니다.
  return <FocusContext.Provider value={{ focusedInputId, setFocusedInputId }}>{children}</FocusContext.Provider>;
};
