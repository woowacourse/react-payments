import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

interface CardNumberFieldProps {
  cardNumber: number[];
  isError: boolean[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

function CardNumberField({
  cardNumber,
  isError,
  onChange,
}: CardNumberFieldProps) {
  return (
    <div>
      <Label htmlFor="cardNumber-0" id="cardNumber">
        카드 번호
      </Label>
      <InputWrapper>
        {cardNumber.map((v, index) => (
          <Input
            isError={isError[index]}
            type="number"
            name="cardNumber"
            id={`cardNumber-${index}`}
            value={v}
            key={index}
            aria-labelledby="cardNumber"
            onChange={(e) => onChange(e, index)}
          />
        ))}
      </InputWrapper>
    </div>
  );
}

export default CardNumberField;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;
const Label = styled.label`
  font-size: 12px;
`;
