import React from 'react';
import styled from 'styled-components';

import { ERROR_MESSAGE } from '../../../constants/errors';
import { LABEL, MAX_LENGTH, SIZE_STYLE } from '../../../constants/inputInfo';
import { InputInfo } from '../../../type/input';
import { ErrorMessage, Label, Input } from '../../common';

export interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  inputs: InputInfo[];
}

export function InputBox({ id, inputs }: InputBoxProps) {
  return (
    <_InputContainer>
      <Label htmlFor={`${id}`}>
        {String(id) in LABEL ? LABEL[`${id}`] : String(id)}
      </Label>
      <_InputWithErrorMessage>
        {inputs.map(
          ({ type, value, handleChange, required, isError }, index) => (
            <React.Fragment key={index}>
              <_InputWrapper>
                <div>{id === 'username' ? `${value.length} / 30` : ''}</div>
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
            </React.Fragment>
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
