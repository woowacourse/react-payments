import styled from '@emotion/styled';

interface InputTextsProps {
  label: string;
  placeholder: string[];
  eventHandler?: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  state?: string[];
}

const InputTexts: React.FC<InputTextsProps> = ({
  label,
  placeholder,
  state,
  eventHandler,
}) => {
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
            value={state ? state[index] : ''}
            onChange={(e) => eventHandler!(e, index)}
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
  letter-spacing: 0%;
  vertical-align: middle;
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

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 2px;
  font-size: 11px;
  outline: none;
`;
