import styled from '@emotion/styled';
import Input from '../../common/Input/Input';
import useInputFocus from '../../../hooks/useInputFocus';

interface CardNumberFieldProps {
  cardNumber: string[];
  isError: boolean[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

function CardNumberField({
  cardNumber,
  isError,
  onChange,
}: CardNumberFieldProps) {
  const { inputRef, handleChange } = useInputFocus({
    inputValueLength: 4,
  });

  return (
    <div>
      <Label htmlFor="cardNumber-0" id="cardNumber">
        카드 번호
      </Label>
      <InputWrapper>
        {cardNumber.map((v, index) => (
          <Input
            ref={(el) => {
              if (el) {
                inputRef.current[index] = el;
              }
            }}
            isError={isError[index]}
            type="tel"
            name="cardNumber"
            id={`cardNumber-${index}`}
            value={v}
            key={index}
            aria-labelledby="cardNumber"
            onChange={(e) => {
              onChange(e, index);
              handleChange(index);
            }}
            placeholder="1234"
            maxLength={4}
            regexString={/^\d*$/}
            autoFocus={index === 0 ? true : false}
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
