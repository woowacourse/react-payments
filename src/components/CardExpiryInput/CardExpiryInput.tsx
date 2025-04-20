import { useCardContext } from "../../contexts/CardContext";
import { useRef, useState } from "react";
import { validateMonth } from "../../domain/validate";
import { validateYear } from "../../domain/validate";
import { INPUT_CONTAINER } from "../../constants/title";
import { CARD_VALIDATION_INFO } from "../../constants/CardValidationInfo";
import InputContainer from "../InputContainer/InputContainer";
import ERROR from "../../constants/errorMessage";

const CardExpiryInput = () => {
  const { month, setMonth, year, setYear } = useCardContext();
  const [helperText, setHelperText] = useState("");
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    try {
      if (name === "month") {
        setMonth(value);
        validateMonth(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        validateYear(year, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
      } else if (name === "year") {
        setYear(value);
        validateMonth(month, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        validateYear(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
      }
      setHelperText("");
      setErrorIndex(null);
    } catch (error: unknown) {
      catchError(error);
    }
  };

  const catchError = (error: unknown) => {
    if (error instanceof Error) {
      if (error.message === ERROR.EXPIRY.INVALID_MONTH) {
        inputRefs.current[0]?.focus();
        setErrorIndex(0);
      } else if (error.message === ERROR.EXPIRY.INVALID_YEAR) {
        inputRefs.current[1]?.focus();
        setErrorIndex(1);
      }
      setHelperText(error.message);
    }
  };

  return (
    <InputContainer
      title={INPUT_CONTAINER.EXPIRE.TITLE}
      subTitle={INPUT_CONTAINER.EXPIRE.SUBTITLE}
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
          onChange={handleDate}
          ref={(element) => {
            inputRefs.current.push(element);
          }}
          className={`input ${errorIndex === 0 && "errorInput"}`}
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
          className={`input ${errorIndex === 1 && "errorInput"}`}
          maxLength={CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH}
        />
      </div>
      <p className="helperText">{helperText}</p>
    </InputContainer>
  );
};

export default CardExpiryInput;
