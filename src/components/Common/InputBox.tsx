import React from 'react';
import styled from 'styled-components';

interface InputType {
  type: string;
  maxLength: number;
  placeholder?: string;
  textSecurity?: boolean;
  required?: boolean;
}

interface InputBoxProps {
  inputs: InputType[];
  inputValues: string | string[];
  setInputValues: (val: string | string[]) => void;
  align: string;
  separator?: string;
  isFullWidth?: boolean;
}

const InputBox = ({
  inputs,
  inputValues,
  setInputValues,
  align,
  separator,
  isFullWidth = false,
}: InputBoxProps) => {
  const onChangeInput = (type: string, index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number' && isNaN(Number(e.target.value))) {
      return;
    }

    if (typeof inputValues === 'string') {
      setInputValues(e.target.value);
      return;
    }

    const newInputValues = inputValues.slice();
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  return (
    <InputsBoxWrapper isFullWidth={isFullWidth} align={align}>
      {inputs.map(({ type, maxLength, placeholder, textSecurity, required }, index) => (
        <>
          {index > 0 && <Separator>{separator}</Separator>}
          <Input
            type="text"
            value={typeof inputValues === 'string' ? inputValues : inputValues[index]}
            onChange={onChangeInput(type, index)}
            placeholder={placeholder}
            minLength={required ? maxLength : 0}
            maxLength={maxLength}
            align={align}
            textSecurity={textSecurity}
            required={required}
          />
        </>
      ))}
    </InputsBoxWrapper>
  );
};

export default InputBox;

const InputsBoxWrapper = styled.div<{ isFullWidth?: boolean; align?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
  align-items: center;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'min-content')};
  height: 48.75px;
  box-sizing: border-box;

  border: none;
  padding: 0 14px;

  background: #ecebf1;
  border-radius: 7px;

  color: #000000;
  font-size: 20px;
`;

const Separator = styled.span`
  text-align: center;
  font-size: 16px;
`;

const Input = styled.input<{ align: string; textSecurity?: boolean }>`
  width: ${({ maxLength }) => maxLength! * 16}px;
  max-width: 100%;
  height: 16px;
  border: none;
  background-color: transparent;

  color: #000000;
  font-size: 16px;
  text-align: ${({ align }) => align};
  outline: none;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ textSecurity }) => textSecurity && '-webkit-text-security: disc'};
`;
