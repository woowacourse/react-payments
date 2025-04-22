import { useEffect, useState } from "react";
import NumberInput from "../../@common/NumberInput/NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../CardField.styles";
import {
  isExpired,
  isInvalidMonth,
  isInvalidYear,
  validateExpiration,
} from "./utils/dateUtils";
import { CardInfo } from "../../../hooks/useCardInfo";

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
            isInvalidMonth(cardInfo.month) ||
            isExpired(cardInfo.month, cardInfo.year)
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
            isInvalidYear(cardInfo.year) ||
            isExpired(cardInfo.month, cardInfo.year)
          }
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputField>
  );
}

export default CardExpirationField;
