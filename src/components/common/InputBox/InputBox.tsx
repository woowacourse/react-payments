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
                <_TextCount>
                  {infoType === 'username' ? `${value.length} / 30` : ''}
                </_TextCount>
                <Input
                  isError={isError}
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

  margin: 1rem;
`;

const _InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 0.7rem;
`;

const _InputWithErrorMessage = styled.div`
  position: relative;
  display: flex;
  justify-content: start;

  gap: 0.7rem;
`;

const _TextCount = styled.div`
  position: relative;
  left: 35rem;
  top: -1.3rem;

  width: 5rem;
`;
