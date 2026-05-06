import Input from '../../../../../common/components/Input/Input';
import Label from '../../../../../common/components/Label/Label';
import styled from 'styled-components';
import useFieldValidation from '../../../../../common/hooks/useFieldValidation';
import {
  isInMaxLength,
  isMaxLength,
  isNumeric,
} from '../../../utils/validator';

const NumberField = ({
  cardNumbers,
  setCardNumbers,
}: {
  cardNumbers: string[];
  setCardNumbers: (value: string[]) => void;
}) => {
  const NUMBER_LENGTH = 4;

  const { firstErrorIndex, errorMessage, touch } = useFieldValidation({
    values: cardNumbers,
    validate: (value) => {
      if (!isMaxLength(value, NUMBER_LENGTH)) {
        return '카드 번호 4자리를 입력해 주세요';
      }

      return null;
    },
  });

  const handleNumbersChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!isNumeric(value)) return;
    if (!isInMaxLength(value, NUMBER_LENGTH)) return;

    const newChunks = cardNumbers.map((chunk, i) =>
      i === index ? value : chunk,
    );
    setCardNumbers(newChunks);
  };

  const handleNumbersBlur = (index: number) => {
    touch(index);
  };

  return (
    <StyledField>
      <Label value="카드 번호" />
      <InputWrapper>
        {cardNumbers.map((chunk, index) => (
          <CardNumberInput
            key={index}
            value={chunk}
            placeholder="1234"
            inputMode="numeric"
            maxLength={4}
            strokeMode={index === firstErrorIndex ? 'error' : 'default'}
            onChange={(e) => handleNumbersChange(index, e.target.value)}
            onBlur={() => handleNumbersBlur(index)}
          />
        ))}
      </InputWrapper>

      <ErrorMessage>{errorMessage}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
`;

const CardNumberInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default NumberField;
