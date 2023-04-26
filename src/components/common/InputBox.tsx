import React from 'react';

import styled from 'styled-components';

import {
  LABEL,
  MAX_LENGTH,
  PLACEHOLDER,
  SIZE_STYLE,
} from '../../constants/inputInfo';
import { ErrorMessage, Label, Input } from '../common';

import { ERROR_MESSAGE } from '../../constants/errors';
import { InputInfo } from '../../type/input';
interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  inputs: InputInfo[];
}

export function InputBox({ id, inputs }: InputBoxProps) {
  return (
    <_InputContainer>
      <Label htmlFor={`${id}`}>{LABEL[`${id}`]}</Label>
      <_InputWithErrorMessage>
        {inputs.map(
          ({ type, value, handleChange, required, isError }, index) => (
            <>
              <_InputWrapper>
                <div>{id === 'USERNAME' ? `${value.length} / 30` : ''}</div>
                <Input
                  id={`${id}${index}`}
                  name={id}
                  type={type}
                  value={value}
                  onChange={handleChange}
                  required={required}
                  maxLength={MAX_LENGTH[`${id}`]}
                  size={SIZE_STYLE[`${id}`]}
                />
                <ErrorMessage>{isError && ERROR_MESSAGE[`${id}`]}</ErrorMessage>
              </_InputWrapper>
            </>
          )
        )}
      </_InputWithErrorMessage>
    </_InputContainer>
  );
}

const _InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin: 1rem;
`;

const _InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 1rem;
`;

const _InputWithErrorMessage = styled.div`
  display: flex;
  justify-content: start;

  gap: 0.7rem;
`;
