import styled from '@emotion/styled';

interface InputTextsProps {
  label: string;
  placeholder: string[];
  setCardNumbers?: React.Dispatch<React.SetStateAction<string[]>>;
  cardNumbers?: string[];
  errorMessageRef?: React.RefObject<HTMLDivElement | null>;
}

const InputTexts: React.FC<InputTextsProps> = ({
  label,
  placeholder,
  setCardNumbers,
  cardNumbers,
  errorMessageRef,
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
            value={cardNumbers ? cardNumbers[index] : ''}
            onChange={(e) => {
              setCardNumbers!((prev) => {
                const newCardNumbers = [...prev];
                if (
                  /^[0-9]*$/.test(e.target.value) &&
                  e.target.value.length <= text.length
                ) {
                  newCardNumbers[index] = e.target.value;
                  e.target.style.borderColor = '#ccc';
                  if (errorMessageRef?.current) {
                    errorMessageRef.current.innerText = ' ';
                  }
                } else {
                  e.target.style.borderColor = 'red';
                  if (errorMessageRef?.current) {
                    errorMessageRef.current.innerText =
                      '숫자만 입력 가능합니다.';
                  }
                }
                return newCardNumbers;
              });
            }}
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
