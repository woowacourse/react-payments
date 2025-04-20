import NumberInput from "./NumberInput";
import { useState, useEffect } from "react";
import { ERROR_MESSAGE } from "../constants/guide";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { hasInvalidCardNumberSegment } from "../utils/validation";

interface CardNumberFieldProps {
  cardInfo: {
    firstNumber: string;
    secondNumber: string;
    thirdNumber: string;
    fourthNumber: string;
  };
  handleCardInfo: (
    key: keyof CardNumberFieldProps["cardInfo"],
    value: string
  ) => void;
  maxLength: number;
}

function CardNumberField({
  cardInfo,
  handleCardInfo,
  maxLength,
}: CardNumberFieldProps) {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const numbers = [
      cardInfo.firstNumber,
      cardInfo.secondNumber,
      cardInfo.thirdNumber,
      cardInfo.fourthNumber,
    ];

    const isInvalid = hasInvalidCardNumberSegment(numbers, maxLength);
    if (isInvalid) setErrorText(ERROR_MESSAGE.LENGTH(maxLength));
    else setErrorText("");
  }, [
    cardInfo.firstNumber,
    cardInfo.secondNumber,
    cardInfo.thirdNumber,
    cardInfo.fourthNumber,
    maxLength,
  ]);

  return (
    <NumberInputField>
      <Label htmlFor="first-number">카드 번호</Label>
      <NumberInputContainer>
        <NumberInput
          id="first-number"
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
    </NumberInputField>
  );
}

export default CardNumberField;
