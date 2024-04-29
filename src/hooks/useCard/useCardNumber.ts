import { useRef } from 'react';
import { CardNumberKey } from '../../types/card';
import { UseCardNumberReturnType } from '../../types/hooks';
import validateCardNumber from '../../validator/validateCardNumber';
import validateNumber from '../../validator/validateNumber';
import useInputs from '../useInputs';

const INITIAL_CARD_NUMBER = { first: '', second: '', third: '', fourth: '' };

const NEXT_INPUT_FIELD = {
  first: 'second',
  second: 'third',
  third: 'fourth',
} as const;

const useCardNumber = (): UseCardNumberReturnType => {
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInputs<
    Record<CardNumberKey, string>
  >(INITIAL_CARD_NUMBER, {
    onChange: validateNumber,
    onBlur: validateCardNumber,
  });
  const inputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const validationResult = validateNumber(e.target.value);
    if (e.target.value.length === e.target.maxLength && !validationResult.isError) {
      const key = name as keyof typeof NEXT_INPUT_FIELD;
      if (NEXT_INPUT_FIELD[key]) {
        inputRefs[NEXT_INPUT_FIELD[key]].current?.focus();
      }
    }
    setErrorInfo({
      ...errorInfo,
      [name]: {
        ...validationResult,
      },
    });
    if (validationResult.isError) return;
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  return { value, handleChange, handleBlur, errorInfo, inputRefs };
};

export default useCardNumber;
