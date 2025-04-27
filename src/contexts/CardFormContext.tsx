import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  RefObject,
  ChangeEvent,
  useRef,
} from 'react';
import {
  useMultipleInputFields,
  useInputField,
} from '../hooks/useCardInputHooks';
import {
  isValidNumberSegment,
  isValidExpirationSegment,
  validateCvcNumber,
  validatePasswordSegment,
} from '../utils/cardValidation';
import useFormValidation from '../hooks/useFormValidation';
import { InputFieldState } from '../types/models';

interface CardFormContextValue {
  numberFields: InputFieldState[];
  handleNumberFieldChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  numberInputRefs: RefObject<HTMLInputElement | null>[];

  expiryFields: InputFieldState[];
  handleExpiryFieldChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  expiryInputRefs: RefObject<HTMLInputElement | null>[];

  cvcField: InputFieldState;
  handleCvcFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  cvcInputRef: RefObject<HTMLInputElement | null>;

  passwordField: InputFieldState;
  handlePasswordFieldChange: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordInputRef: RefObject<HTMLInputElement | null>;

  brand: string;
  handleBrandSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  brandSelectRef: RefObject<HTMLSelectElement | null>;

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
    (e: ChangeEvent<HTMLSelectElement>) => {
      setBrand(e.target.value);
    },
    []
  );
  const brandSelectRef = useRef<HTMLSelectElement | null>(null);

  const [numberFields, handleNumberFieldChange, numberInputRefs] =
    useMultipleInputFields(
      ['', '', '', ''],
      ['1234', '1234', '1234', '1234'],
      4,
      isValidNumberSegment
    );

  const [expiryFields, handleExpiryFieldChange, expiryInputRefs] =
    useMultipleInputFields(['', ''], ['MM', 'YY'], 2, isValidExpirationSegment);

  const [cvcField, handleCvcFieldChange, cvcInputRef] = useInputField(
    '',
    '123',
    3,
    validateCvcNumber
  );

  const [passwordField, handlePasswordFieldChange, passwordInputRef] =
    useInputField('', '**', 2, validatePasswordSegment);

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
        numberInputRefs,
        expiryFields,
        handleExpiryFieldChange,
        expiryInputRefs,
        cvcField,
        handleCvcFieldChange,
        cvcInputRef,
        passwordField,
        handlePasswordFieldChange,
        passwordInputRef,
        brand,
        handleBrandSelectChange,
        brandSelectRef,
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
