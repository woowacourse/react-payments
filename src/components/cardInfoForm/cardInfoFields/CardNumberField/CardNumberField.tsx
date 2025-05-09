import { useId } from 'react';
import Input from '../../../common/Input/Input';
import useInputFocus from '../../../../hooks/useInputFocus';
import LabeledInput from '../../../common/LabeledInput/LabeledInput';

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
  const { inputRef, handleChange, handleKeyDown } = useInputFocus({
    inputValueLength: 4,
  });

  const id = useId();
  return (
    <LabeledInput htmlFor={`cardNumber-0-${id}`} label="카드 번호" isMultiple>
      <>
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
            id={`cardNumber-${index}-${id}`}
            value={v}
            key={index}
            aria-labelledby="cardNumber"
            onChange={(e) => {
              onChange(e, index);
              handleChange(index);
            }}
            onKeyDown={(e) => handleKeyDown(e, index)}
            placeholder="1234"
            maxLength={4}
            regexString={/^\d*$/}
            autoFocus={index === 0 ? true : false}
          />
        ))}
      </>
    </LabeledInput>
  );
}

export default CardNumberField;
