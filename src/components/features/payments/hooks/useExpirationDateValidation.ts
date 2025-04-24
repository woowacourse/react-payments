import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { EXPIRATION_DATE } from '../config/card';
import {
  EXPIRATION_DATE_INPUT_TYPE,
  ExpirationDateInputType,
} from '../config/inputField';

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
    handleNextInputFocus(name, value);
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    if (value.length === EXPIRATION_DATE.padLeftThreshold)
      setInputValues((prev) => ({ ...prev, [name]: `0${value}` }));
  };

  const handleNextInputFocus = (
    key: ExpirationDateInputType,
    value: string
  ) => {
    if (value.length !== EXPIRATION_DATE.length || key === 'year') {
      return;
    }
    const keyArray = Object.keys(EXPIRATION_DATE_INPUT_TYPE);

    const currentKeyIndex = keyArray.indexOf(key);
    const nextInputKey = keyArray[
      currentKeyIndex + 1
    ] as ExpirationDateInputType;
    const nextInputRef = inputRefs[nextInputKey];
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };

  return { inputValues, inputRefs, isInputComplete, handleInputValue, onBlur };
}

export default useExpirationDateValidation;
