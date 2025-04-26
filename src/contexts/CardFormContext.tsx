import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import {
  useMultipleInputFields,
  useInputField,
  InputFieldState,
} from '../hooks/useCardInputHooks';
import {
  isValidNumberSegment,
  isValidExpirationSegment,
  validateCvcNumber,
  validatePasswordSegment,
} from '../utils/cardValidation';
import useFormValidation from '../hooks/useFormValidation';

interface CardFormContextValue {
  numberFields: InputFieldState[];
  handleNumberFieldChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;

  expiryFields: InputFieldState[];
  handleExpiryFieldChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;

  cvcField: InputFieldState;
  handleCvcFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  passwordField: InputFieldState;
  handlePasswordFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  brand: string;
  handleBrandSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  isPeriodSeparatorShowing: boolean;
  showPeriodSeparator: () => void;
  hidePeriodSeparator: () => void;

  isFormValid: boolean;
}

const CardFormContext = createContext<CardFormContextValue | null>(null);

interface CardFormProviderProps {
  children: ReactNode;
}

export const CardFormProvider = ({ children }: CardFormProviderProps) => {
  const [brand, setBrand] = useState<string>('');
  const handleBrandSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setBrand(e.target.value);
    },
    []
  );

  const [numberFields, handleNumberFieldChange] = useMultipleInputFields(
    ['', '', '', ''],
    ['1234', '1234', '1234', '1234'],
    4,
    isValidNumberSegment
  );

  const [expiryFields, handleExpiryFieldChange] = useMultipleInputFields(
    ['', ''],
    ['MM', 'YY'],
    2,
    isValidExpirationSegment
  );

  const [cvcField, handleCvcFieldChange] = useInputField(
    '',
    '123',
    3,
    validateCvcNumber
  );

  const [passwordField, handlePasswordFieldChange] = useInputField(
    '',
    '**',
    2,
    validatePasswordSegment
  );

  const [isPeriodSeparatorShowing, setIsPeriodSeparatorShowing] =
    useState<boolean>(false);
  const showPeriodSeparator = useCallback(() => {
    setIsPeriodSeparatorShowing(true);
  }, []);
  const hidePeriodSeparator = useCallback(() => {
    setIsPeriodSeparatorShowing(
      expiryFields.some((expiryField) => expiryField.value !== '')
    );
  }, [expiryFields]);

  const isFormValid = useFormValidation({
    numberFields,
    expiryFields,
    cvcField,
    passwordField,
    selectedBrand: brand,
  });

  return (
    <CardFormContext.Provider
      value={{
        numberFields,
        handleNumberFieldChange,
        expiryFields,
        handleExpiryFieldChange,
        cvcField,
        handleCvcFieldChange,
        passwordField,
        handlePasswordFieldChange,
        brand,
        handleBrandSelectChange,
        isPeriodSeparatorShowing,
        showPeriodSeparator,
        hidePeriodSeparator,
        isFormValid,
      }}
    >
      {children}
    </CardFormContext.Provider>
  );
};

export function useCardForm(): CardFormContextValue {
  const ctx = useContext(CardFormContext);
  if (!ctx) {
    alert('useCardForm은 CardFormProvider 내에서 사용되어야 합니다.');
    return {} as CardFormContextValue;
  }
  return ctx;
}
