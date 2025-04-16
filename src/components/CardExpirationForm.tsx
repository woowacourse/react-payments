import { useEffect, useState } from "react";
import isExactLength from "../utils/isExactLength";
import styled from "@emotion/styled";
import NumberInput from "./NumberInput";

interface CardExpirationFormProps {
  month: string;
  year: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number;
}

function CardExpirationForm({
  month,
  year,
  setMonth,
  setYear,
  maxLength,
}: CardExpirationFormProps) {
  const [errorText, setErrorText] = useState("");

  const isValidMonth = Number(month) >= 1 && Number(month) <= 12;
  const isValidYear = Number(year) >= 25 && Number(year) <= 99;

  useEffect(() => {
    const isExactDigits = [month, year].some((number) => {
      if (isExactLength(number, 0) || isExactLength(number, maxLength))
        return false;
      return true;
    });

    if (isExactDigits) {
      setErrorText(maxLength + "자의 숫자만 입력 가능합니다.");
      return;
    }
    if (month !== "" && !isValidMonth) {
      setErrorText("01에서 12사이의 숫자를 입력해주세요.");
      return;
    }
    if (year !== "" && !isValidYear) {
      setErrorText("만료된 연도입니다. 25년 이후의 년도를 입력해주세요.");
      return;
    }
    setErrorText("");
  }, [month, year]);

  return (
    <NumberInputForm>
      <Label>유효기간</Label>
      <NumberInputContainer>
        <NumberInput
          value={month}
          setValue={setMonth}
          maxLength={maxLength}
          placeholder="MM"
          extraErrorCondition={month !== "" && !isValidMonth}
        />
        <NumberInput
          value={year}
          setValue={setYear}
          maxLength={maxLength}
          placeholder="YY"
          extraErrorCondition={year !== "" && !isValidYear}
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardExpirationForm;

const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const NumberInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
`;

const ErrorText = styled.p`
  color: #ff3d3d;
  font-size: 9.5px;
`;

const NumberInputForm = styled.div`
  height: 70px;
`;
