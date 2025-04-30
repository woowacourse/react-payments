import Input from "../../../components/Input/Input";
import styles from "./CardNumberInput.module.css";
import { indexToCardNumberKey } from "../../../utils/indexToCardNumberKey";
import { CARD_NUMBER_FIELDS, type CardKey } from "../../../types/cardKeyTypes";
import Text from "../../../components/Text/Text";
import { useRef } from "react";
import { moveFocusToNextInput } from "../../../utils/moveFocusToNextInput";
import { CARD_STEP } from "../../../constants/CardStep";
import { CARD_INPUT_LIMIT } from "../../../constants/CardInputLimit";

interface CardNumberProps {
  handleChange: (value: string, index: number) => void;
  handleStep: () => void;
  step: number;
  cardNumbers: Record<CardKey, string>;
  errorMessage: Record<CardKey, string>;
}

const CARD_NUMBER_LABEL = {
  TITLE: "결제할 카드 번호를 입력해주세요.",
  DESCRIPTION: "본인 명의의 카드만 결제 가능합니다.",
  SUBTITLE: "카드 번호",
} as const;

export default function CardNumberInput({
  handleChange,
  handleStep,
  step,
  cardNumbers,
  errorMessage,
}: CardNumberProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const firstError =
    CARD_NUMBER_FIELDS.map(
      (_, idx) => errorMessage[indexToCardNumberKey(idx)]
    ).find((msg) => msg) || "";

  const handleInputChange = (value: string, index: number) => {
    handleChange(value, index);

    if (value.length < CARD_INPUT_LIMIT.CARD_NUMBER_MAX_LENGTH) return;

    moveFocusToNextInput(inputRefs, CARD_NUMBER_FIELDS.length, index);

    if (canGoToNextStep(step, index, value, firstError)) {
      handleStep();
    }
  };

  return (
    <section className={styles["card-number"]}>
      <Text textType="title">{CARD_NUMBER_LABEL.TITLE}</Text>
      <Text textType="description">{CARD_NUMBER_LABEL.DESCRIPTION}</Text>
      <Text textType="subtitle">{CARD_NUMBER_LABEL.SUBTITLE}</Text>
      <div className={styles["card-number__input"]}>
        {CARD_NUMBER_FIELDS.map((key, idx) => (
          <Input
            ref={(el) => {
              inputRefs.current[idx] = el!;
            }}
            key={key}
            value={cardNumbers[key]}
            errorMessage={errorMessage[key]}
            onChange={(value) => handleInputChange(value, idx)}
            autoFocus={idx === 0}
          />
        ))}
      </div>
      <Text textType="error">{firstError}</Text>
    </section>
  );
}

const canGoToNextStep = (
  currentStep: number,
  index: number,
  value: string,
  errorMessage: string
) => {
  return (
    currentStep === CARD_STEP.NUMBER &&
    index === CARD_NUMBER_FIELDS.length - 1 &&
    value.length === CARD_INPUT_LIMIT.CARD_NUMBER_MAX_LENGTH &&
    errorMessage === ""
  );
};
