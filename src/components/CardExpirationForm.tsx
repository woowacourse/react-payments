import { useEffect, useState } from "react";
import isExactLength from "../utils/isExactLength";
import NumberInput from "./NumberInput";
import { ERROR_MESSAGE } from "../constants/guide";
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardForm.styles";
import { EXPIRATION_DATE } from "../constants/setting";

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

  const isValidMonth =
    Number(cardInfo.month) >= EXPIRATION_DATE.MONTH.MIN &&
    Number(cardInfo.month) <= EXPIRATION_DATE.MONTH.MAX;
  const isValidYear =
    Number(cardInfo.year) >= EXPIRATION_DATE.YEAR.MIN &&
    Number(cardInfo.year) <= EXPIRATION_DATE.YEAR.MAX;

  useEffect(() => {
    const isExactDigits = [cardInfo.month, cardInfo.year].some((number) => {
      if (isExactLength(number, 0) || isExactLength(number, maxLength))
        return false;
      return true;
    });

    if (isExactDigits) {
      setErrorText(ERROR_MESSAGE.LENGTH(maxLength));
      return;
    }
    if (cardInfo.month !== "" && !isValidMonth) {
      setErrorText(ERROR_MESSAGE.INVALID_MONTH);
      return;
    }
    if (cardInfo.year !== "" && !isValidYear) {
      setErrorText(ERROR_MESSAGE.INVALID_YEAR);
      return;
    }
    setErrorText("");
  }, [cardInfo.month, cardInfo.year]);

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
          extraErrorCondition={cardInfo.month !== "" && !isValidMonth}
        />
        <NumberInput
          value={cardInfo.year}
          setValue={(value) => {
            handleCardInfo("year", value);
          }}
          maxLength={maxLength}
          placeholder="YY"
          extraErrorCondition={cardInfo.year !== "" && !isValidYear}
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardExpirationForm;
