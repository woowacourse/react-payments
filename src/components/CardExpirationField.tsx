import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import {
  isNotExpired,
  isValidMonth,
  isValidYear,
  validateExpiration,
} from "../domains/expiration/dateUtils";
import { CardInfo } from "../hooks/useCardInfo";

interface CardExpirationFieldProps {
  cardInfo: CardInfo;

  handleCardInfo: (
    key: keyof CardExpirationFieldProps["cardInfo"],
    value: string
  ) => void;
  maxLength: number;
}

function CardExpirationField({
  cardInfo,
  handleCardInfo,
  maxLength,
}: CardExpirationFieldProps) {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setErrorText(validateExpiration(cardInfo, maxLength));
  }, [cardInfo.month, cardInfo.year, maxLength]);

  return (
    <NumberInputField>
      <Label id="expiration-label" htmlFor="expiration-month">
        유효기간
      </Label>
      <NumberInputContainer role="group" aria-labelledby="expiration-label">
        <NumberInput
          id="expiration-month"
          value={cardInfo.month}
          setValue={(value) => {
            handleCardInfo("month", value);
          }}
          maxLength={maxLength}
          placeholder="MM"
          extraErrorCondition={
            (cardInfo.month !== "" && !isValidMonth(cardInfo.month)) ||
            (!isNotExpired(cardInfo.month, cardInfo.year) &&
              cardInfo.month !== "" &&
              cardInfo.year !== "")
          }
        />
        <NumberInput
          value={cardInfo.year}
          setValue={(value) => {
            handleCardInfo("year", value);
          }}
          maxLength={maxLength}
          placeholder="YY"
          extraErrorCondition={
            (cardInfo.year !== "" && !isValidYear(cardInfo.year)) ||
            (!isNotExpired(cardInfo.month, cardInfo.year) &&
              cardInfo.month !== "" &&
              cardInfo.year !== "")
          }
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputField>
  );
}

export default CardExpirationField;
