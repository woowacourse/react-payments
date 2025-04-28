import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { EXPIRATION_DATE } from '../config/card';
import {
  EXPIRATION_DATE_INPUT_TYPE,
  ExpirationDateInputType,
} from '../config/inputField';
import { focusNextInput } from '../utils/focus';

function useExpirationDateValidation() {
  const [inputValues, setInputValues] = useState<
    Record<ExpirationDateInputType, string>
  >({
    month: '',
    year: '',
  });
  const inputRefs: Record<
    ExpirationDateInputType,
    RefObject<HTMLInputElement | null>
  > = {
    month: useRef<HTMLInputElement | null>(null),
    year: useRef<HTMLInputElement | null>(null),
  };
  const [isInputComplete, setIsInputComplete] = useState(false);

  const handleInputValue = ({
    name,
    value,
  }: {
    name: ExpirationDateInputType;
    value: string;
  }) => {
    if (value.length > EXPIRATION_DATE.length) return;

    if (
      name === EXPIRATION_DATE_INPUT_TYPE.month &&
      Number(value) > EXPIRATION_DATE.month.max
    )
      return;

    setInputValues((prev) => ({ ...prev, [name]: value }));
    if (
      name === EXPIRATION_DATE_INPUT_TYPE.year &&
      value.length === EXPIRATION_DATE.length
    )
      setIsInputComplete(true);
    else setIsInputComplete(false);
    handleFocusNextInput(name, value);
  };

  const handleBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    if (value.length === EXPIRATION_DATE.padLeftThreshold)
      setInputValues((prev) => ({ ...prev, [name]: `0${value}` }));
  };

  const handleFocusNextInput = (
    key: ExpirationDateInputType,
    value: string
  ) => {
    if (value.length !== EXPIRATION_DATE.length) return;
    if (key === EXPIRATION_DATE_INPUT_TYPE.year) return;

    focusNextInput(key, inputRefs);
  };

  return {
    inputValues,
    inputRefs,
    isInputComplete,
    handleInputValue,
    handleBlur,
  };
}

export default useExpirationDateValidation;
