import React from 'react';

import styled from 'styled-components';

import { LABEL, MAX_LENGTH, PLACEHOLDER } from '../../constants/inputInfo';
import { ErrorMessage, Label, Input } from '../common';

import { ERROR_MESSAGE } from '../../constants/errors';
import { matchKeyWithId } from '../../utils/infoKey';
import { InputInfo } from '../../type/input';
interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string | undefined;
  inputs: InputInfo[];
}

export function InputBox({ id, inputs }: InputBoxProps) {
  return (
    <_InputContainer>
      <Label htmlFor={`${id}`}>{LABEL[`${id}`]}</Label>
      <_InputWithErrorMessage>
        {inputs.map(({ type, value, handleChange, required, error }, index) => (
          <>
            <_InputWrapper>
              <_TextCount>
                {id === 'USERNAME' ? `${value.length} / 30` : ''}
              </_TextCount>
              <Input
                id={`${id}${index}`}
                name={`${id}${index}`}
                type={type}
                value={value}
                onChange={handleChange}
                required={required}
                placeholder={PLACEHOLDER[matchKeyWithId(`${id}${index}`)]}
                maxLength={MAX_LENGTH[`${id}`]}
              />
              <ErrorMessage>
                {error && ERROR_MESSAGE[matchKeyWithId(`${id}${index}`)]}
              </ErrorMessage>
            </_InputWrapper>
          </>
        ))}
      </_InputWithErrorMessage>
    </_InputContainer>
  );
}

const _InputContainer = styled.div`
  position: relative;
  width: 31.8rem;

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

const _TextCount = styled.div``;

const _InputWithErrorMessage = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 0.7rem;
`;
