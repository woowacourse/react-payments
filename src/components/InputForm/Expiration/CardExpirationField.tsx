import { useMemo } from "react";
import NumberInput from "../../@common/NumberInput/NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { validateMonth, validateYear, validateExpiration } from "../validation";
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
  const monthValidation = useMemo(
    () => validateMonth(cardInfo.month, maxLength),
    [cardInfo.month, maxLength]
  );

  const yearValidation = useMemo(
    () => validateYear(cardInfo.year, maxLength),
    [cardInfo.year, maxLength]
  );

  const expirationValidation = useMemo(
    () => validateExpiration(cardInfo.month, cardInfo.year, maxLength),
    [cardInfo.month, cardInfo.year, maxLength]
  );

  const errorMessage = useMemo(() => {
    if (!monthValidation.isValid) return monthValidation.errorMessage;
    if (!yearValidation.isValid) return yearValidation.errorMessage;
    if (!expirationValidation.isValid) return expirationValidation.errorMessage;
    return "";
  }, [monthValidation, yearValidation, expirationValidation]);

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
          isError={!monthValidation.isValid || !expirationValidation.isValid}
        />
        <NumberInput
          value={cardInfo.year}
          setValue={(value) => {
            handleCardInfo("year", value);
          }}
          maxLength={maxLength}
          placeholder="YY"
          isError={!yearValidation.isValid || !expirationValidation.isValid}
        />
      </NumberInputContainer>
      <ErrorText>{errorMessage}</ErrorText>
    </NumberInputField>
  );
}

export default CardExpirationField;
