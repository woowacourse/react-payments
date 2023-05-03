import React from 'react';
import styled from 'styled-components';

import { ERROR_MESSAGE } from '../../../constants/errors';
import { LABEL, MAX_LENGTH, SIZE_STYLE } from '../../../constants/inputInfo';
import { InputInfo } from '../../../type/input';
import { camelToSnake } from '../../../utils/cardInfoFormat';
import { ErrorMessage, Label, Input } from '../../common';

export interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  infoType: string;
  inputs: InputInfo[];
}

export function InputBox({ infoType, inputs }: InputBoxProps) {
  return (
    <_InputContainer>
      <Label htmlFor={infoType}>{LABEL[camelToSnake(infoType)]}</Label>
      <_InputWithErrorMessage>
        {inputs.map(
          ({ type, value, handleChange, required, isError }, index) => (
            <React.Fragment key={index}>
              <_InputWrapper>
                <div>
                  {infoType === 'username' ? `${value.length} / 30` : ''}
                </div>
                <Input
                  name={infoType}
                  type={type}
                  value={value}
                  onChange={handleChange}
                  required={required}
                  maxLength={MAX_LENGTH[camelToSnake(infoType)]}
                  size={SIZE_STYLE[camelToSnake(infoType)]}
                />
                <ErrorMessage>
                  {isError && ERROR_MESSAGE[camelToSnake(infoType)]}
                </ErrorMessage>
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
