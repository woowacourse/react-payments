import styled from "@emotion/styled";
import NumberInput from "./NumberInput";
import { useState, useEffect } from "react";
import isExactLength from "../utils/isExactLength";
import { ERROR_MESSAGE } from "../constants/guide";

interface CardNumberFormProps {
  cardInfo: {
    firstNumber: string;
    secondNumber: string;
    thirdNumber: string;
    fourthNumber: string;
  };
  handleCardInfo: (
    key: keyof CardNumberFormProps["cardInfo"],
    value: string
  ) => void;
  maxLength: number;
}

function CardNumberForm({
  cardInfo,
  handleCardInfo,
  maxLength,
}: CardNumberFormProps) {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const condition = [
      cardInfo.firstNumber,
      cardInfo.secondNumber,
      cardInfo.thirdNumber,
      cardInfo.fourthNumber,
    ].some((number) => {
      if (isExactLength(number, 0) || isExactLength(number, maxLength))
        return false;
      return true;
    });
    if (condition) setErrorText(ERROR_MESSAGE.LENGTH(maxLength));
    else setErrorText("");
  }, [
    cardInfo.firstNumber,
    cardInfo.secondNumber,
    cardInfo.thirdNumber,
    cardInfo.fourthNumber,
  ]);

  return (
    <NumberInputForm>
      <Label>카드 번호</Label>
      <NumberInputContainer>
        <NumberInput
          value={cardInfo.firstNumber}
          setValue={(value) => {
            handleCardInfo("firstNumber", value);
          }}
          maxLength={maxLength}
          placeholder="1234"
        />
        <NumberInput
          value={cardInfo.secondNumber}
          setValue={(value) => {
            handleCardInfo("secondNumber", value);
          }}
          maxLength={maxLength}
          placeholder="1234"
        />
        <NumberInput
          value={cardInfo.thirdNumber}
          setValue={(value) => {
            handleCardInfo("thirdNumber", value);
          }}
          maxLength={maxLength}
          placeholder="1234"
        />
        <NumberInput
          value={cardInfo.fourthNumber}
          setValue={(value) => {
            handleCardInfo("fourthNumber", value);
          }}
          maxLength={maxLength}
          placeholder="1234"
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
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

const NumberInputForm = styled.div`
  height: 70px;
`;
