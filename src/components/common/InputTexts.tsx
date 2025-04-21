import styled from '@emotion/styled';
import { useCallback } from 'react';

interface InputTextsProps {
  label: string;
  placeholder: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  state: string[];
  isErrors: boolean[];
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputTexts = ({
  label,
  placeholder,
  state,
  onChange,
  isErrors,
  onFocus,
  onBlur,
}: InputTextsProps) => {
  const onChangeAt = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e, index);
    },
    []
  );

  return (
    <InputTextsContainer>
      <Label>{label}</Label>
      <Row>
        {placeholder.map((text, index) => (
          <Input
            key={index}
            type="text"
            placeholder={text}
            maxLength={text.length}
            value={state[index]}
            onChange={onChangeAt(index)}
            onFocus={onFocus}
            onBlur={onBlur}
            isError={isErrors[index]}
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

const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.label};
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

const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.error : theme.colors.border};
  border-radius: 2px;
  font-size: ${({ theme }) => theme.fontSizes.label};
  outline: none;
`;
