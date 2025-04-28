import NumberInput from "../../@common/NumberInput/NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { CardInfo } from "../../../hooks/useCardInfo";
import useFieldFocus from "../hooks/useFiledFocus";
import useFieldValidation from "../hooks/useFieldValidation";
import { validateSegmentLength } from "../validation";

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
  const fieldKeys = [
    "firstNumber",
    "secondNumber",
    "thirdNumber",
    "fourthNumber",
  ] as const;

  const { fieldRefs, focusField } = useFieldFocus<HTMLInputElement>(
    fieldKeys.length
  );

  const fields = fieldKeys.map((key) => cardInfo[key]);
  const { validations, errorMessage } = useFieldValidation(
    fields,
    validateSegmentLength,
    maxLength
  );

  return (
    <NumberInputField>
      <Label id="number-label" htmlFor="first-number">
        카드 번호
      </Label>
      <NumberInputContainer role="group" aria-labelledby="number-label">
        {fieldKeys.map((key, index) => (
          <NumberInput
            autoFocus={index === 0}
            key={key}
            id={index === 0 ? "first-number" : undefined}
            value={cardInfo[key]}
            setValue={(value) => handleCardInfo(key, value)}
            maxLength={maxLength}
            placeholder="1234"
            isError={!validations[index].isValid}
            ref={fieldRefs[index]}
            onComplete={() =>
              index < fieldKeys.length - 1 && focusField(index + 1)
            }
          />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorMessage}</ErrorText>
    </NumberInputField>
  );
}

export default CardNumberField;
