import React, {
  createContext,
  useContext,
  ReactNode,
  ChangeEvent,
  RefObject,
} from 'react';
import { InputFieldState } from '../types/models';
import { useInputField } from '../hooks/useCardInputHooks';
import { validateCvcNumber } from '../utils/cardValidation';

interface CvcContextValue {
  cvcField: InputFieldState;
  handleCvcChange: (e: ChangeEvent<HTMLInputElement>) => void;
  cvcInputRef: RefObject<HTMLInputElement | null>;
  resetCvc: () => void;
}

const CvcContext = createContext<CvcContextValue | null>(null);

const CVC_PLACEHOLDER = '123';
const CVC_MAX_LENGTH = 3;

export const CvcProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cvcField, handleCvcChange, cvcInputRef, resetCvc] = useInputField({
    initialValue: '',
    placeholder: CVC_PLACEHOLDER,
    maximumLength: CVC_MAX_LENGTH,
    validationFunction: validateCvcNumber,
  });

  return (
    <CvcContext.Provider
      value={{ cvcField, handleCvcChange, cvcInputRef, resetCvc }}
    >
      {children}
    </CvcContext.Provider>
  );
};

export function useCvcContext(): CvcContextValue {
  const ctx = useContext(CvcContext);
  if (!ctx) {
    alert('useCvcContext는 CvcContextProvider 내에서 사용되어야 합니다.');
    return {} as CvcContextValue;
  }
  return ctx;
}
