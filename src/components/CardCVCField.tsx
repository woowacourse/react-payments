import { useEffect, useState } from "react";
import isExactLength from "../utils/isExactLength";
import NumberInput from "./NumberInput";
import { ERROR_MESSAGE } from "../constants/guide";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { CardInfo } from "../hooks/useCardInfo";

interface CardCVCFieldProps {
  cardInfo: CardInfo;

  handleCardInfo: (
    key: keyof CardCVCFieldProps["cardInfo"],
    value: string
  ) => void;
  maxLength: number;
}

function CardCVCField({
  cardInfo,
  handleCardInfo,
  maxLength,
}: CardCVCFieldProps) {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (
      isExactLength(cardInfo.cvc, 0) ||
      isExactLength(cardInfo.cvc, maxLength)
    ) {
      setErrorText("");
    } else {
      setErrorText(ERROR_MESSAGE.LENGTH(maxLength));
    }
  }, [cardInfo.cvc]);

  return (
    <NumberInputField>
      <Label htmlFor="cvc">CVC</Label>
      <NumberInputContainer>
        <NumberInput
          id="cvc"
          value={cardInfo.cvc}
          setValue={(value) => {
            handleCardInfo("cvc", value);
          }}
          maxLength={maxLength}
          placeholder="123"
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputField>
  );
}

export default CardCVCField;
