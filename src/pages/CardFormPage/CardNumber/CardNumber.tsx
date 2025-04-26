import Input from "../../../components/Input/Input";
import styles from "./CardNumber.module.css";
import { indexToCardNumberKey } from "../../../utils/indexToCardNumberKey";
import { CARD_NUMBER_FIELDS, type CardKey } from "../../../types/cardKeyTypes";
import Text from "../../../components/Text/Text";
import { useRef } from "react";
import { moveFocusToNextInput } from "../../../utils/moveFoucseToNextInput";

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

export default function CardNumber({
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

    if (value.length < 4) return;

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
  step: number,
  index: number,
  value: string,
  errorMessage: string
) => {
  return (
    step === 1 &&
    index === CARD_NUMBER_FIELDS.length - 1 &&
    value.length === 4 &&
    errorMessage === ""
  );
};
