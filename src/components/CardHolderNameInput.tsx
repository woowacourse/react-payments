import React from 'react';
import styled from 'styled-components';

import Input from './common/Input';
import InputField from './common/InputField';

import { ADD_CARD_FORM_CONDITION, ADD_CARD_FORM_ERROR_MESSAGE } from '../constants/index';

const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInputCounter = styled.p<{ isComplete: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  line-height: 14px;
  color: ${props => (props.isComplete ? '#04c09e' : '#525252')};
  letter-spacing: -0.085em;
`;

interface InputCounterProps {
  currLength: number;
  maxLength: number;
  isComplete: boolean;
}

function InputCounter({ currLength = 0, maxLength, isComplete }: InputCounterProps) {
  return (
    <StyledInputCounter isComplete={isComplete}>
      {currLength}/{maxLength}
    </StyledInputCounter>
  );
}

interface Props {
  holderName: string;
  onChange: (value?: string, index?: number) => void;
  isInvalid: boolean;
  isComplete: boolean;
}

export default function CardHolderNameInput({ holderName, onChange, isInvalid, isComplete }: Props) {
  return (
    <InputFieldWrapper>
      <InputField
        labelText="카드 소유자 이름 (선택)"
        wrapperWidth="100%"
        horizontalAlign="flex-start"
        isComplete={isComplete}
        isError={isInvalid}
        errorMessage={ADD_CARD_FORM_ERROR_MESSAGE.HOLDER_NAME}>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          type="text"
          value={holderName}
          onChange={e => onChange(e.target.value.toUpperCase())}
          width="100%"
          textAlign="left"
          data-testid={'card-holder-name-input'}
        />
      </InputField>
      <InputCounter
        currLength={holderName.length}
        maxLength={ADD_CARD_FORM_CONDITION.HOLDER_NAME_MAX_LENGTH}
        isComplete={isComplete}
      />
    </InputFieldWrapper>
  );
}
