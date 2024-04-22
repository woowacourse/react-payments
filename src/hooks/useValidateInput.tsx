import useInput, { useInputOption } from './useInput';

import { useState } from 'react';

interface validatorProps {
  checkIsValid: (input: string) => boolean;
  shouldReflect: boolean;
  errorMessage: string;
}

interface validatedInputProps extends useInputOption {
  validatorPropsArray: validatorProps[];
}

export default function useValidateInput({
  validatorPropsArray,
  decorateValue,
  maxLength,
  setHook,
}: validatedInputProps) {
  const { input, onChange: inputOnChange } = useInput({
    decorateValue,
    maxLength,
    setHook,
  });
  const [errorMessage, setErrorMessage] = useState('');

  // reflect 안시키는 에러를 우선 처리해주기 위해 정렬
  const arrangedValidatorPropsArray = [...validatorPropsArray].sort(a =>
    !a.shouldReflect ? -1 : 1
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (maxLength && maxLength < newValue.length) return;
    const { willChange, errorMessage } = arrangedValidatorPropsArray.reduce(
      (obj, props) => {
        // 만약 이전에 reflect가 안되는 에러가 발생했다면(!obj.willChange !== newValue), 더 이상 validate를 진행하지 않음
        if (!obj.willChange) return obj;

        const isValid = props.checkIsValid(newValue);
        if (isValid) return obj;

        if (!props.shouldReflect) obj.willChange = false;
        obj.errorMessage = props.errorMessage;
        return obj;
      },
      { willChange: true, errorMessage: '' }
    );
    if (willChange) inputOnChange(event);
    setErrorMessage(errorMessage);
  };

  return { input, onChange, errorMessage };
}
