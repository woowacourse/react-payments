import styled from '@emotion/styled';

interface InputTextsProps {
  label: string;
  placeholder: string[];
}

const InputTexts: React.FC<InputTextsProps> = ({ label, placeholder }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Row>
        {placeholder.map((text, index) => (
          <Input
            key={index}
            type="text"
            placeholder={text}
            maxLength={text.length}
          />
        ))}
      </Row>
    </div>
  );
};

export default InputTexts;

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
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
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
