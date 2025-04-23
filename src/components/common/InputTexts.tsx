import styled from '@emotion/styled';
import React from 'react';
import SingleInput from './SingleInput';
import { useFocusGroup } from '../../hooks/useFocusGroup';

type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type Period = {
  month: string;
  year: string;
};

interface InputTextsProps {
  label: string;
  placeholder: string[];
  eventHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  state: string | Period | CardNumber;
  errors: boolean[];
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onComplete?: () => void;
}

const getValue = (
  state: string | Period | CardNumber,
  index: number
): string => {
  if (typeof state === 'string') {
    return index === 0 ? state : ''; // 문자열 하나면 index 0에만 표시
  }

  if ('month' in state)
    return index === 0 ? state.month ?? '' : state.year ?? '';

  const keys = ['first', 'second', 'third', 'fourth'] as const;
  const key = keys[index];
  return state[key] ?? '';
};

const InputTexts = ({
  label,
  placeholder,
  state,
  eventHandler,
  errors,
  onFocus,
  onBlur,
  onComplete,
}: InputTextsProps) => {
  const { getRefCallback, handleInput } = useFocusGroup({
    length: placeholder.length,
    onComplete,
  });

  return (
    <InputTextsContainer>
      <Label>{label}</Label>
      <Row>
        {placeholder.map((text, index) => (
          <SingleInput
            ref={getRefCallback(index)}
            value={getValue(state, index)}
            placeholder={text}
            maxLength={text.length}
            error={errors ? errors[index] : false}
            onChange={(e) => {
              eventHandler!(e, index);
              handleInput(e, index);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ))}
      </Row>
    </InputTextsContainer>
  );
};

export default InputTexts;

const InputTextsContainer = styled.div`
  width: 100%;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  min-width: 100%;
  gap: 10px;
`;
