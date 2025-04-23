import { ChangeEvent, useState } from 'react';
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
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    if (value.length === EXPIRATION_DATE.padLeftThreshold)
      setInputValues((prev) => ({ ...prev, [name]: `0${value}` }));
  };

  return { inputValues, handleInputValue, onBlur };
}

export default useExpirationDateValidation;
