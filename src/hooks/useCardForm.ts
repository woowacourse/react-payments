import { ChangeEvent, useState } from 'react';
import {
  CardIssuerType,
  CardNumbersType,
  ExpirationDateType,
} from '../components/Form/PaymentForm';
import { FIELD_STEP_SEQUENCE, InputFieldConfigType } from '../constants';
import { isCardRegistrationComplete } from '../utils/fields';

type FormValues = {
  cardNumbers: CardNumbersType;
  expirationDate: ExpirationDateType;
  cvc: string;
  password: string;
  cardIssuer: CardIssuerType | null;
};

type ServerError = { field: InputFieldConfigType; message: string } | null;

const SERVER_ERROR_FIELD: Partial<Record<keyof FormValues, InputFieldConfigType>> = {
  cardNumbers: 'CARD_NUMBERS',
  expirationDate: 'EXPIRATION_DATE',
  cvc: 'CVC',
};

const useCardForm = () => {
  const [values, setValues] = useState<FormValues>({
    cardNumbers: ['', '', '', ''],
    expirationDate: { month: '', year: '' },
    cvc: '',
    password: '',
    cardIssuer: null,
  });
  const [step, setStep] = useState(1);
  const [serverError, setServerError] = useState<ServerError>(null);

  const setField = <K extends keyof FormValues>(name: K, newValue: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [name]: newValue }));
    clearServerError(name);
    advanceStep(name, newValue);
  };

  const handleCardNumberChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const next = [...values.cardNumbers] as CardNumbersType;
    next[index] = e.target.value;
    setField('cardNumbers', next);
  };

  const handleExpirationChange =
    (key: keyof ExpirationDateType) => (e: ChangeEvent<HTMLInputElement>) => {
      setField('expirationDate', { ...values.expirationDate, [key]: e.target.value });
    };

  const handleTextChange = (name: 'cvc' | 'password') => (e: ChangeEvent<HTMLInputElement>) =>
    setField(name, e.target.value);

  const selectCardIssuer = (value: CardIssuerType | null) => setField('cardIssuer', value);

  const advanceStep = <T>(fieldName: string, value: T) => {
    const index = FIELD_STEP_SEQUENCE.findIndex((f) => f.name === fieldName);

    if (FIELD_STEP_SEQUENCE[index].isComplete(value)) setStep(index + 2);
  };

  const clearServerError = (name: keyof FormValues) => {
    const field = SERVER_ERROR_FIELD[name];
    if (field && serverError?.field === field) setServerError(null);
  };

  const isValid = isCardRegistrationComplete(values) && !serverError;

  return {
    values,
    step,
    serverError,
    setServerError,
    isValid,
    handleCardNumberChange,
    handleExpirationChange,
    handleTextChange,
    selectCardIssuer,
  };
};

export default useCardForm;
