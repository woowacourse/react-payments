import { useRef, useState } from 'react';
import InputContainer from '../InputContainer/InputContainer';
import { validateMonth } from '../../domain/validate';
import { validateYear } from '../../domain/validate';
import { INPUT_CONTAINER } from '../../constants/title';
import ERROR from '../../constants/errorMessage';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';

type CardExpiryInputProps = {
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
};

const CardExpiryInput = ({
  month,
  setMonth,
  year,
  setYear,
}: CardExpiryInputProps) => {
  const [helperText, setHelperText] = useState('');
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    try {
      if (name === 'month') {
        setMonth(value);
        validateMonth(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
      } else if (name === 'year') {
        setYear(value);
        validateMonth(month, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        validateYear(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
      }
      setHelperText('');
      setErrorIndex(null);
    } catch (error: unknown) {
      catchError(error);
    }
  };

  const catchError = (error: unknown) => {
    if (!(error instanceof Error)) return;
    if (error.message === ERROR.EXPIRY.INVALID_MONTH) {
      inputRefs.current[0]?.focus();
      setErrorIndex(0);
    } else if (error.message === ERROR.EXPIRY.INVALID_YEAR) {
      inputRefs.current[1]?.focus();
      setErrorIndex(1);
    }
    setHelperText(error.message);
  };

  return (
    <InputContainer
      title={INPUT_CONTAINER.EXPIRE.TITLE}
      subTitle={INPUT_CONTAINER.EXPIRE.SUBTITLE}
    >
      <h4 className="label">유효기간</h4>
      <div className={`inputContainer`}>
        <input
          type="text"
          name="month"
          placeholder="MM"
          value={month}
          onChange={handleDate}
          ref={(element) => {
            inputRefs.current.push(element);
          }}
          className={`input ${errorIndex === 0 && 'errorInput'}`}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
        />
        <input
          type="text"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handleDate}
          ref={(element) => {
            inputRefs.current.push(element);
          }}
          className={`input ${errorIndex === 1 && 'errorInput'}`}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
        />
      </div>
      <p className="helperText" data-testid="helper-text">
        {helperText}
      </p>
    </InputContainer>
  );
};

export default CardExpiryInput;
