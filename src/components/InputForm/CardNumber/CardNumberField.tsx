import NumberInput from "../../@common/NumberInput/NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { CardInfo } from "../../../hooks/useCardInfo";
import useCardNumberField from "./hooks/useCardNumberField";

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
  const { refs, focusHandlers, segmentValidations, errorMessage } =
    useCardNumberField(cardInfo, maxLength);

  return (
    <NumberInputField>
      <Label id="number-label" htmlFor="first-number">
        카드 번호
      </Label>
      <NumberInputContainer role="group" aria-labelledby="number-label">
        {(
          [
            "firstNumber",
            "secondNumber",
            "thirdNumber",
            "fourthNumber",
          ] as const
        ).map((key, index) => (
          <NumberInput
            autoFocus={index === 0}
            key={key}
            id={index === 0 ? "first-number" : undefined}
            value={cardInfo[key]}
            setValue={(value) => handleCardInfo(key, value)}
            maxLength={maxLength}
            placeholder="1234"
            isError={!segmentValidations[index].isValid}
            ref={
              index === 1
                ? refs.second
                : index === 2
                ? refs.third
                : index === 3
                ? refs.fourth
                : undefined
            }
            onComplete={
              index === 0
                ? focusHandlers.second
                : index === 1
                ? focusHandlers.third
                : index === 2
                ? focusHandlers.fourth
                : undefined
            }
          />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorMessage}</ErrorText>
    </NumberInputField>
  );
}

export default CardNumberField;
