import styled from "@emotion/styled";
import NumberInput from "./NumberInput";
import { useState } from "react";

interface CardNumberFormProps {}

function CardNumberForm({}: CardNumberFormProps) {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [fourthNumber, setFourthNumber] = useState("");
  const [errorText, setErrorText] = useState("");

  return (
    <>
      <Label>카드 번호</Label>
      <NumberInputContainer>
        <NumberInput
          value={firstNumber}
          setValue={setFirstNumber}
          maxLength={4}
          placeholder="1234"
        />
        <NumberInput
          value={secondNumber}
          setValue={setSecondNumber}
          maxLength={4}
          placeholder="1234"
        />
        <NumberInput
          value={thirdNumber}
          setValue={setThirdNumber}
          maxLength={4}
          placeholder="1234"
        />
        <NumberInput
          value={fourthNumber}
          setValue={setFourthNumber}
          maxLength={4}
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
