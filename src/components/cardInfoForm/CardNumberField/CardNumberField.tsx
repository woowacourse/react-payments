import styled from '@emotion/styled';
import Input from '../../common/Input/Input';

interface CardNumberFieldProps {
  cardNumber: string[];
  errorStateList: boolean[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  setInputRef: (el: HTMLInputElement | null, index: number) => void;
}

function CardNumberField({
  cardNumber,
  errorStateList,
  onChange,
  setInputRef,
}: CardNumberFieldProps) {
  return (
    <div>
      <Label htmlFor="cardNumber-0" id="cardNumber">
        카드 번호
      </Label>
      <InputWrapper>
        {cardNumber.map((v, index) => (
          <Input
            hasError={errorStateList[index]}
            type="tel"
            name="cardNumber"
            id={`cardNumber-${index}`}
            value={v}
            key={index}
            aria-labelledby="cardNumber"
            onChange={(e) => onChange(e, index)}
            placeholder="1234"
            min={0}
            max={9999}
            ref={(el) => setInputRef(el, index)}
            autoFocus={index === 0 && v.length === 0}
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
