import { ChangeEvent, useState } from 'react';
import { CVC } from '../config/card';
import { ERROR_TYPE, ErrorType } from '../config/error';

function useCVCValidation() {
  const [inputValue, setInputValue] = useState('');
  const [errorType, setErrorType] = useState<ErrorType[]>([]);
  const [isInputComplete, setIsInputComplete] = useState(false);

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
    if (value.length > CVC.length.max) return;

    setInputValue(value);
    setIsInputComplete(value.length === CVC.length.max);
  };

  const onBlur = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    updateCardError({
      errorType: ERROR_TYPE.shortCVCSegment,
      isError: value.length > CVC.length.min && value.length < CVC.length.max,
    });
  };

  return { inputValue, errorType, isInputComplete, handleInputValue, onBlur };
}

export default useCVCValidation;
