import React, { useEffect, useState } from 'react';
import PaymentsInputField from './PaymentsInputField';

import styled from 'styled-components';

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: black;
`;

const InputFieldContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const ErrorMessage = styled.div`
height: 12px;

color: #ff3d3d;
font-size: 9.5px;
font-weight: 400;
line-height: 12px;
  text-align: left;
`;

interface InputFieldState {
  value: string;
  hasError: boolean
}

const REGEX_TABLE: Record<InputType, RegExp> = {
  text: /^.*$/,
  english: /^[a-zA-Z]*$/,
  number: /^[0-9]*$/,
} as const;

const ERROR_TABLE: Record<InputType, string> = {
  text: '',
  english: '영어만 입력 가능합니다.',
  number: '숫자만 입력 가능합니다.',
};

const initializeInputFieldState = (length: number) => {
  const obj = {};
  for (let i = 0; i <= length; i++) {
    obj[i] = {
      value: '',
      hasError: false
    };
  }
  return obj;
}

const PaymentsInputForm = ({ ...props }: PaymentsInputFormProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  const [inputState, setInputState] = useState<Record<number, InputFieldState>>(initializeInputFieldState(props.inputFieldProps.length));

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = e.target.name;
    const newValue = e.target.value;
    const prop = props.inputFieldProps[index];

    if (
      newValue.length <= prop.maxLength &&
      !REGEX_TABLE[prop.inputType].test(newValue)
    ) {
      setInputState({
        ...inputState,
        [e.target.name]:
        {
          value: newValue.slice(0, newValue.length - 1),
          hasError: true
        }
      });
      setErrorMessage(ERROR_TABLE[prop.inputType]);
    } else if (newValue.length > prop.maxLength) {
      setInputState({
        ...inputState,
        [e.target.name]:
        {
          value: newValue.slice(0, prop.maxLength),
          hasError: false
        }
      });
    } else {
      setInputState({
        ...inputState,
        [e.target.name]:
        {
          value: newValue,
          hasError: false
        }
      });
    }
  };

  const hasNoError = () => {
    const hasErrorArray = Object.values(inputState).map((state) => state.hasError);
    return !hasErrorArray.some((value) => value === true)
  }

  useEffect(() => {
    if (hasNoError()) {
      setErrorMessage('')
    }
  }, [inputState])

  return (
    <InputForm>
      <Label>{props.label}</Label>
      <InputFieldContainer className="input-field-container">
        {props.inputFieldProps.map(
          (inputFieldProp: PaymentsInputFieldProps, index: number) => {
            return (
              <PaymentsInputField
                name={index}
                inputType={inputFieldProp.inputType}
                placeholder={inputFieldProp.placeholder}
                maxLength={inputFieldProp.maxLength}
                value={inputState[index].value}
                hasError={inputState[index].hasError}
                handleValueChange={handleValueChange}
              />
            );
          },
        )}
      </InputFieldContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputForm>
  );
};

export default PaymentsInputForm;
