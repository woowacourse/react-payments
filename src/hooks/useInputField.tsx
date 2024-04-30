import { useEffect, useState } from 'react';
import { InputType } from '../types/input';
import { checkLength } from '../domain/InputValidation';

interface Props {
  inputTypes: InputType;
  handleComplete: (isCompleted: boolean) => void;
}

export const useInputField = ({ inputTypes, handleComplete }: Props) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errorMessages, setErrorMessages] = useState<Record<number, string>>(
    {}
  );

  useEffect(() => {
    if (isCompleted()) {
      handleComplete(true);
    } else {
      handleComplete(false);
    }
  }, [errorMessages]);

  const isCompleted = () =>
    Object.keys(values).length === inputTypes.inputInfo.length &&
    Object.values(errorMessages).every((message) => message === '') &&
    Object.values(values).every((value, index) =>
      checkLength(value, inputTypes.inputInfo[index].minLength)
    );

  const updateInputValue = (property: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [property]: value,
    }));
  };

  const updateErrorMessage = (index: number, errorMessage: string) => {
    setErrorMessages((prevErrorMessages) => ({
      ...prevErrorMessages,
      [index]: errorMessage,
    }));
  };

  return {
    values,
    errorMessages,
    updateInputValue,
    updateErrorMessage,
  };
};
