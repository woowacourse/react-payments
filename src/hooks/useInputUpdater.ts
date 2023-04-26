import { useState, useCallback } from 'react';
import { FormInputValueType, ValidatorResponseType } from '../types';

type UpdaterFunctions = {
  trimmer?: (rawValue: string) => string;
  validator: (rawValue: string) => ValidatorResponseType;
  contextSetter: (newValue: FormInputValueType) => void;
};

/**
 * 《useInputUpdater》
 *
 * Input Element의 값이 변경되면
 * 1) 값을 형식에 맞게 수정
 * 2) 입력값을 자동으로 검증
 * 3) 변경 사항을 Context API에 자동으로 반영하는 기능을 수행합니다.
 *
 * 컴포넌트 내에 복잡한 값 구현을 할 필요 없이, 사용할 함수만 지정해 주는 것으로 간편하게 구현할 수 있게 됩니다.
 *
 * @param trimmer - 값을 형식에 맞게 수정하는 데 사용할 함수
 * @param validator - 값을 검증하는 데 사용할 함수
 * @param contextSetter - Context API 값 업데이트를 위해 사용할 함수
 */
const useInputUpdater = ({ trimmer, validator, contextSetter }: UpdaterFunctions) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const setInputValueWithValidation = useCallback(
    (newInput: React.ChangeEvent<HTMLInputElement> | string) => {
      const newValue = typeof newInput === 'string' ? newInput : newInput.target.value;
      const trimmedValue = trimmer ? trimmer(newValue) : newValue;
      const { result, errorMessage } = validator(trimmedValue);

      setInputValue(() => trimmedValue);
      setErrorMessage(() => errorMessage);
      contextSetter({ value: trimmedValue, isValid: result });
    },
    [trimmer, validator, contextSetter]
  );

  return { inputValue, errorMessage, setInputValueWithValidation };
};

export default useInputUpdater;
