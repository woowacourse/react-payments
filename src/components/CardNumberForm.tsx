import styled from "@emotion/styled";
import NumberInput from "./NumberInput";
import { useState, useEffect } from "react";
import isExactLength from "../utils/isExactLength";

interface CardNumberFormProps {
  maxLength: number;
}

function CardNumberForm({ maxLength }: CardNumberFormProps) {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [fourthNumber, setFourthNumber] = useState("");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const condition = [
      firstNumber,
      secondNumber,
      thirdNumber,
      fourthNumber,
    ].some((number) => {
      if (isExactLength(number, 0) || isExactLength(number, maxLength))
        return false;
      return true;
    });
    if (condition) setErrorText(maxLength + "자의 숫자만 입력 가능합니다.");
    else setErrorText("");
  }, [firstNumber, secondNumber, thirdNumber, fourthNumber]);

  return (
    <>
      <Label>카드 번호</Label>
      <NumberInputContainer>
        <NumberInput
          value={firstNumber}
          setValue={setFirstNumber}
          maxLength={maxLength}
          placeholder="1234"
        />
        <NumberInput
          value={secondNumber}
          setValue={setSecondNumber}
          maxLength={maxLength}
          placeholder="1234"
        />
        <NumberInput
          value={thirdNumber}
          setValue={setThirdNumber}
          maxLength={maxLength}
          placeholder="1234"
        />
        <NumberInput
          value={fourthNumber}
          setValue={setFourthNumber}
          maxLength={maxLength}
          placeholder="1234"
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </>
  );
}

export default CardNumberForm;

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
