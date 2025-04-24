import { useMemo } from "react";
import NumberInput from "../../@common/NumberInput/NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { CardInfo } from "../../../hooks/useCardInfo";
import { validateSegmentLength } from "../validation";

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
  const cvcValidation = useMemo(
    () => validateSegmentLength(cardInfo.cvc, maxLength),
    [cardInfo.cvc, maxLength]
  );

  return (
    <NumberInputField>
      <Label htmlFor="cvc">CVC</Label>
      <NumberInputContainer>
        <NumberInput
          id="cvc"
          value={cardInfo.cvc}
          setValue={(value) => handleCardInfo("cvc", value)}
          maxLength={maxLength}
          placeholder="123"
          isError={!cvcValidation.isValid}
        />
      </NumberInputContainer>
      <ErrorText>{cvcValidation.errorMessage}</ErrorText>
    </NumberInputField>
  );
}

export default CardCVCField;
