import React, {
  createContext,
  useContext,
  ReactNode,
  ChangeEvent,
  RefObject,
} from 'react';
import { InputFieldState } from '../types/models';
import { useMultipleInputFields } from '../hooks/useCardInputHooks';
import { isValidExpirationSegment } from '../utils/cardValidation';

interface ExpiryDateContextValue {
  expiryFields: InputFieldState[];
  handleExpiryChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  expiryInputRefs: RefObject<HTMLInputElement | null>[];
}

const ExpiryDateContext = createContext<ExpiryDateContextValue | null>(null);

const EXPIRY_PLACEHOLDERS = ['MM', 'YY'] as const;
const EXPIRY_SEGMENT_LENGTH = 2;

export const ExpiryDateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [expiryFields, handleExpiryChange, expiryInputRefs] =
    useMultipleInputFields({
      initialValues: ['', ''],
      placeholders: EXPIRY_PLACEHOLDERS as unknown as string[],
      maximumLength: EXPIRY_SEGMENT_LENGTH,
      validationFunction: isValidExpirationSegment,
    });

  return (
    <ExpiryDateContext.Provider
      value={{ expiryFields, handleExpiryChange, expiryInputRefs }}
    >
      {children}
    </ExpiryDateContext.Provider>
  );
};

export function useExpiryDateContext(): ExpiryDateContextValue {
  const ctx = useContext(ExpiryDateContext);
  if (!ctx)
    throw new Error(
      'useExpiryDateContext는 ExpiryDateContextProvider 내에서 사용되어야 합니다.'
    );
  return ctx;
}
