import styled from '@emotion/styled';

interface InputTextsProps {
  label: string;
  placeholder: string[];
  eventHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  state: string[];
  isErrors: boolean[];
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputTexts = ({
  label,
  placeholder,
  state,
  eventHandler,
  isErrors,
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
            type="text"
            placeholder={text}
            maxLength={text.length}
            value={state[index]}
            onChange={(e) => eventHandler(e, index)}
            onFocus={onFocus}
            onBlur={onBlur}
            isError={isErrors ? isErrors[index] : false}
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
