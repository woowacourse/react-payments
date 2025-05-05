import { ChangeEvent, useRef, useState } from 'react';
import { CARD_PASSWORD } from '../config/card';
import { ERROR_TYPE, ErrorType } from '../config/error';

function useCardPasswordValidation() {
  const [inputValue, setInputValue] = useState('');
  const [errorType, setErrorType] = useState<ErrorType[]>([]);
  const [isInputComplete, setIsInputComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateCardError = ({
    errorType,
    isError,
  }: {
    errorType: ErrorType;
    isError: boolean;
  }) => {
    if (isError) {
      setErrorType((prev) => [...prev, errorType]);
    } else {
      setErrorType((prev) =>
        prev.filter((errorType) => errorType !== errorType)
      );
    }
  };

  const handleInputValue = (value: string) => {
    if (value.length > CARD_PASSWORD.length.max) return;
    if (Number.isNaN(Number(value))) return;

    setInputValue(value);
    setIsInputComplete(value.length === CARD_PASSWORD.length.max);
  };

  const handleBlur = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    updateCardError({
      errorType: ERROR_TYPE.shortCardPasswordSegment,
      isError:
        value.length > CARD_PASSWORD.length.min &&
        value.length < CARD_PASSWORD.length.max,
    });
  };

  return {
    inputValue,
    inputRef,
    errorType,
    isInputComplete,
    handleInputValue,
    handleBlur,
  };
}

export default useCardPasswordValidation;
