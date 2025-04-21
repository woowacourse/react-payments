import NumberInput from "./NumberInput";
import { useState, useEffect } from "react";
import { ERROR_MESSAGE } from "../constants/guide";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { hasInvalidSegment } from "../utils/@common/hasInvalidSegment";
import { CardInfo } from "../hooks/useCardInfo";

interface CardNumberFieldProps {
  cardInfo: CardInfo;

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

    const isInvalid = hasInvalidSegment(numbers, maxLength);
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
      <Label id="number-label" htmlFor="first-number">
        카드 번호
      </Label>
      <NumberInputContainer role="group" aria-labelledby="number-label">
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
