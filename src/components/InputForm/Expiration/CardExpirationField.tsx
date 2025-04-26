import NumberInput from "../../@common/NumberInput/NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { CardInfo } from "../../../hooks/useCardInfo";
import useCardExpirationField from "./hooks/useCardExpirationField";

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
  const { yearInputRef, validation, errorMessage, handleMonthChange } =
    useCardExpirationField(cardInfo, maxLength, handleCardInfo);

  return (
    <NumberInputField>
      <Label id="expiration-label" htmlFor="expiration-month">
        유효기간
      </Label>
      <NumberInputContainer role="group" aria-labelledby="expiration-label">
        <NumberInput
          id="expiration-month"
          value={cardInfo.month}
          setValue={handleMonthChange}
          maxLength={maxLength}
          placeholder="MM"
          isError={!validation.month.isValid || !validation.expiration.isValid}
        />
        <NumberInput
          ref={yearInputRef}
          value={cardInfo.year}
          setValue={(value) => {
            handleCardInfo("year", value);
          }}
          maxLength={maxLength}
          placeholder="YY"
          isError={!validation.year.isValid || !validation.expiration.isValid}
        />
      </NumberInputContainer>
      <ErrorText>{errorMessage}</ErrorText>
    </NumberInputField>
  );
}

export default CardExpirationField;
