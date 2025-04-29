import React, {
  createContext,
  useContext,
  ReactNode,
  ChangeEvent,
  RefObject,
  useState,
  useCallback,
} from 'react';
import { InputFieldState } from '../types/models';
import { useMultipleInputFields } from '../hooks/useCardInputHooks';
import { validateExpiryDate } from '../utils/cardValidation';

interface ExpiryDateContextValue {
  expiryFields: InputFieldState[];
  showSep: boolean;
  handleExpiryChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  showPeriodSeparator: () => void;
  hidePeriodSeparator: () => void;
  expiryInputRefs: RefObject<HTMLInputElement | null>[];
  resetExpiryDate: () => void;
}

const ExpiryDateContext = createContext<ExpiryDateContextValue | null>(null);

const EXPIRY_PLACEHOLDERS = ['MM', 'YY'] as const;
const EXPIRY_SEGMENT_LENGTH = 2;

export const ExpiryDateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [expiryFields, handleExpiryChange, expiryInputRefs, reset] =
    useMultipleInputFields({
      initialValues: ['', ''],
      placeholders: EXPIRY_PLACEHOLDERS as unknown as string[],
      maximumLength: EXPIRY_SEGMENT_LENGTH,
      validationFunction: validateExpiryDate,
    });

  const resetExpiryDate = useCallback(() => {
    reset();
    setShowSep(false);
  }, [reset]);

  const [showSep, setShowSep] = useState<boolean>(false);
  const showPeriodSeparator = useCallback(() => {
    setShowSep(true);
  }, []);
  const hidePeriodSeparator = useCallback(
    () => setShowSep(expiryFields.some((f) => f.value !== '')),
    [expiryFields]
  );

  return (
    <ExpiryDateContext.Provider
      value={{
        expiryFields,
        handleExpiryChange,
        expiryInputRefs,
        showSep,
        showPeriodSeparator,
        hidePeriodSeparator,
        resetExpiryDate,
      }}
    >
      {children}
    </ExpiryDateContext.Provider>
  );
};

export function useExpiryDateContext(): ExpiryDateContextValue {
  const ctx = useContext(ExpiryDateContext);
  if (!ctx) {
    alert(
      'useExpiryDateContext는 ExpiryDateContextProvider 내에서 사용되어야 합니다.'
    );
    return {} as ExpiryDateContextValue;
  }
  return ctx;
}
