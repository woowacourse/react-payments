import React, {
  createContext,
  useContext,
  ReactNode,
  ChangeEvent,
  RefObject,
} from 'react';
import { InputFieldState } from '../types/models';
import { useInputField } from '../hooks/useCardInputHooks';
import { validatePasswordSegment } from '../utils/cardValidation';

interface PasswordContextValue {
  passwordField: InputFieldState;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordInputRef: RefObject<HTMLInputElement | null>;
}

const PasswordContext = createContext<PasswordContextValue | null>(null);

const PASSWORD_PLACEHOLDER = '**';
const PASSWORD_MAX_LENGTH = 2;

export const PasswordProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [passwordField, handlePasswordChange, passwordInputRef] = useInputField(
    '',
    PASSWORD_PLACEHOLDER,
    PASSWORD_MAX_LENGTH,
    validatePasswordSegment
  );

  return (
    <PasswordContext.Provider
      value={{ passwordField, handlePasswordChange, passwordInputRef }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export function usePasswordContext(): PasswordContextValue {
  const ctx = useContext(PasswordContext);
  if (!ctx)
    throw new Error(
      'usePasswordContext는 PasswordContextProvider 내에서 사용되어야 합니다.'
    );
  return ctx;
}
