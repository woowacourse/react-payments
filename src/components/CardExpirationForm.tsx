import { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardForm.styles";
import {
  isNotExpired,
  isValidMonth,
  isValidYear,
  validateExpiration,
} from "../domains/expiration/dateUtils";

interface CardExpirationFormProps {
  cardInfo: {
    month: string;
    year: string;
  };
  handleCardInfo: (
    key: keyof CardExpirationFormProps["cardInfo"],
    value: string
  ) => void;
  maxLength: number;
}

function CardExpirationForm({
  cardInfo,
  handleCardInfo,
  maxLength,
}: CardExpirationFormProps) {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setErrorText(validateExpiration(cardInfo, maxLength));
  }, [cardInfo.month, cardInfo.year, maxLength]);

  return (
    <NumberInputForm>
      <Label>유효기간</Label>
      <NumberInputContainer>
        <NumberInput
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
    </NumberInputForm>
  );
}

export default CardExpirationForm;
