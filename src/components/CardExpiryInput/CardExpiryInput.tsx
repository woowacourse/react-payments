import { useRef, useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import { validateMonth } from "../../domain/validate";
import { validateYear } from "../../domain/validate";
import { expireTitle } from "../../constants/title";
import ERROR from "../../constants/errorMessage";
import { CardValidationInfo } from "../../constants/CardValidationInfo";

type CardExpiryInputProps = {
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
};

const CardExpiryInput = ({month, setMonth, year, setYear}: CardExpiryInputProps) => {
  const [helperText, setHelperText] = useState("");

  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setMonth(e.target.value);
      validateMonth(e.target.value, CardValidationInfo.EXPIRE_DATE_MAX_LENGTH);
      validateYear(year, CardValidationInfo.EXPIRE_DATE_MAX_LENGTH);
      setHelperText("");
      setErrorIndex(null);
    } catch (error: unknown) {
      catchError(error);
    }
  };

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setYear(e.target.value);
      validateMonth(month, CardValidationInfo.EXPIRE_DATE_MAX_LENGTH);
      validateYear(e.target.value, CardValidationInfo.EXPIRE_DATE_MAX_LENGTH);
      setHelperText("");
      setErrorIndex(null);
    } catch (error: unknown) {
      catchError(error);
    }
  };

  const catchError = (error: unknown) => {
    if (error instanceof Error) {
      if(error.message === ERROR.EXPIRY.INVALID_MONTH) {
        inputRefs.current[0]?.focus();
        setErrorIndex(0);
      }   
      else if(error.message === ERROR.EXPIRY.INVALID_YEAR) {
        inputRefs.current[1]?.focus();
        setErrorIndex(1);
      }
      setHelperText(error.message);
    }
  }

  return (
    <InputContainer
      title={expireTitle.TITLE}
      subTitle={expireTitle.SUBTITLE}
    >
      <label htmlFor="" className="label">
        유효기간
      </label>
      <div className={`inputContainer`}>
        <input
          type="text"
          name="month"
          placeholder="MM"
          value={month}
          onChange={handleMonth}
          ref={(element) => {inputRefs.current.push(element)}}
          className={`input ${errorIndex === 0 && 'errorInput'}`}
          maxLength={CardValidationInfo.EXPIRE_DATE_MAX_LENGTH}
        />
        <input
          type="text"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handleYear}
          ref = {(element) => {inputRefs.current.push(element)}}
          className={`input ${errorIndex === 1 && 'errorInput'}`}
          maxLength={CardValidationInfo.EXPIRE_DATE_MAX_LENGTH}
        />
      </div>
      <p className="helperText">{helperText}</p>
    </InputContainer>
  );
};

export default CardExpiryInput;
