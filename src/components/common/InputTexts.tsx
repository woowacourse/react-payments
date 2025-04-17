import styled from '@emotion/styled';
import React from 'react';

interface InputTextsProps {
  label: string;
  placeholder: string[];
  eventHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  state: string[];
  errors: boolean[];
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputTexts = ({
  label,
  placeholder,
  state,
  eventHandler,
  errors,
  onFocus,
  onBlur,
}: InputTextsProps) => {
  return (
    <InputTextsContainer>
      <Label>{label}</Label>
      <Row>
        {placeholder.map((text, index) => (
          <Input
            key={index}
            type='text'
            placeholder={text}
            maxLength={text.length}
            value={state ? state[index] : ''}
            onChange={(e) => eventHandler!(e, index)}
            onFocus={onFocus}
            onBlur={onBlur}
            error={errors ? errors[index] : false}
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

interface InputProps {
  error?: boolean;
}

const Input = styled.input<InputProps>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 2px;
  font-size: 11px;
  outline: none;
`;
