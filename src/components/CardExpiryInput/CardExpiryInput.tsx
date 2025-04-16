import { useRef, useState } from "react";
import InputContainer from "../InputContainer/InputContainer";
import { validateMonth } from "../../domain/validate";
import { validateYear } from "../../domain/validate";

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
      validateMonth(e.target.value, 2);
      validateYear(year, 2);
      setHelperText("");
      setErrorIndex(null);
    } catch (error: unknown) {
      console.log('에러')
      catchError(error);
    }
  };

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setYear(e.target.value);
      validateMonth(month, 2);
      validateYear(e.target.value, 2);
      setHelperText("");
      setErrorIndex(null);
    } catch (error: unknown) {
      // if (error instanceof Error) {
      //   setHelperText(error.message);
      //   setErrorIndex(1);
      //   inputRefs.current[1]?.focus();
      // }

      console.log('에러')
      catchError(error);
    }
  };

  const catchError = (error: unknown) => {
    console.log(inputRefs)
    if (error instanceof Error) {
      console.log('error message :', error.message);
      if(error.message === '유효하지 않은 월입니다.') {
        inputRefs.current[0]?.focus();
        setErrorIndex(0);
      }   
      else if(error.message === '유효하지 않은 연도입니다.') {
        inputRefs.current[1]?.focus();
        setErrorIndex(1);
      }
      setHelperText(error.message);
    }
  }

  return (
    <InputContainer
      title="카드 유효기간을 입력해 주세요"
      subTitle="월/년도(MMYY)를 순서대로 입력해 주세요."
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
          // ref={[...inputRefs, input]}
          ref={(element) => {inputRefs.current.push(element)}}
          className={`input ${errorIndex === 0 && 'errorInput'}`}
          maxLength={2}
        />
        <input
          type="text"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handleYear}
          ref = {(element) => {inputRefs.current.push(element)}}
          className={`input ${errorIndex === 1 && 'errorInput'}`}
          maxLength={2}
        />
      </div>
      <p className="helperText">{helperText}</p>
    </InputContainer>
  );
};

export default CardExpiryInput;
