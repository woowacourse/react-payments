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
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  const [helperText, setHelperText] = useState("");

  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setMonth(e.target.value);
      validateMonth(e.target.value, 2);
      setHelperText("");
      setErrorIndex(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setHelperText(error.message);
        setErrorIndex(0);
        inputRefs.current[0]?.focus();
      }
    }
  };

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setYear(e.target.value);
      validateYear(e.target.value, 2);
      setHelperText("");
      setErrorIndex(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setHelperText(error.message);
        setErrorIndex(1);
        inputRefs.current[1]?.focus();
      }
    }
  };

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
          className={`input ${errorIndex === 0 && 'errorInput'}`}
        />
        <input
          type="text"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handleYear}
          className={`input ${errorIndex === 1 && 'errorInput'}`}
        />
      </div>
      <p className="helperText">{helperText}</p>
    </InputContainer>
  );
};

export default CardExpiryInput;
