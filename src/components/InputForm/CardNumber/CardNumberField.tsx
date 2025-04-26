import { useMemo, useRef } from "react";
import NumberInput from "../../@common/NumberInput/NumberInput";
import {
  NumberInputField,
  Label,
  NumberInputContainer,
  ErrorText,
} from "../styles/CardField.styles";
import { CardInfo } from "../../../hooks/useCardInfo";
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
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  const segmentValidations = useMemo(() => {
    return [
      validateSegmentLength(cardInfo.firstNumber, maxLength),
      validateSegmentLength(cardInfo.secondNumber, maxLength),
      validateSegmentLength(cardInfo.thirdNumber, maxLength),
      validateSegmentLength(cardInfo.fourthNumber, maxLength),
    ];
  }, [
    cardInfo.firstNumber,
    cardInfo.secondNumber,
    cardInfo.thirdNumber,
    cardInfo.fourthNumber,
    maxLength,
  ]);

  const errorMessage =
    segmentValidations.find((v) => !v.isValid)?.errorMessage || "";

  const focusSecondInput = () => secondInputRef.current?.focus();
  const focusThirdInput = () => thirdInputRef.current?.focus();
  const focusFourthInput = () => fourthInputRef.current?.focus();

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
            key={key}
            id={index === 0 ? "first-number" : undefined}
            value={cardInfo[key]}
            setValue={(value) => handleCardInfo(key, value)}
            maxLength={maxLength}
            placeholder="1234"
            isError={!segmentValidations[index].isValid}
            ref={
              index === 1
                ? secondInputRef
                : index === 2
                ? thirdInputRef
                : index === 3
                ? fourthInputRef
                : undefined
            }
            onComplete={
              index === 0
                ? focusSecondInput
                : index === 1
                ? focusThirdInput
                : index === 2
                ? focusFourthInput
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
