import { useRef, useState } from 'react';
import InputContainer from '../InputContainer/InputContainer';
import {
  validateCardNumbers,
  validateFirstCardNumbers,
} from '../../domain/validate';
import CustomCardNumbersError from '../../error/CustomCardNumbersError';
import { INPUT_CONTAINER } from '../../constants/title';
import ERROR from '../../constants/errorMessage';
import { CARD_VALIDATION_INFO } from '../../constants/CardValidationInfo';

type CardNumbersInputProps = {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
};

const CardNumbersInput = ({
  cardNumbers,
  setCardNumbers,
}: CardNumbersInputProps) => {
  const [helperText, setHelperText] = useState('');
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const newCardNumbers = [...cardNumbers];
        newCardNumbers[index] = e.target.value;
        setCardNumbers(newCardNumbers);

        validateFirstCardNumbers(newCardNumbers[0]);
        validateCardNumbers(
          newCardNumbers,
          CARD_VALIDATION_INFO.CARD_MAX_LENGTH
        );
        if (helperText !== '') {
          inputRefs.current[index]?.focus();
        }
        setHelperText('');
        setErrorIndex(null);
      } catch (error: unknown) {
        if (error instanceof CustomCardNumbersError) {
          if (error.message === ERROR.CARD_NUMBER.INVALID) {
            inputRefs.current[0]?.focus();
            setErrorIndex(0);
          } else {
            inputRefs.current[error.index]?.focus();
            setErrorIndex(error.index);
          }
          setHelperText(error.message);
        }
      }
    };

  return (
    <InputContainer
      title={INPUT_CONTAINER.CARD_NUMBERS.TITLE}
      subTitle={INPUT_CONTAINER.CARD_NUMBERS.SUBTITLE}
    >
      <label className="label">카드 번호</label>
      <div className="inputContainer">
        {cardNumbers.map((value, index) => (
          <input
            key={index}
            placeholder="1234"
            name={`card${index + 1}`}
            value={value}
            onChange={handleChange(index)}
            ref={(element) => {
              inputRefs.current.push(element);
            }}
            className={`input ${index === errorIndex && 'errorInput'}`}
            maxLength={CARD_VALIDATION_INFO.CARD_MAX_LENGTH}
          />
        ))}
      </div>
      <p className={`helperText`}>{helperText}</p>
    </InputContainer>
  );
};

export default CardNumbersInput;
