import Input from "../../../components/Input/Input";
import styles from "./CardExpirationDate.module.css";
import {
  EXPIRATION_FIELDS,
  type ExpirationKey,
} from "../../../types/cardKeyTypes";
import { indexToExpirationKey } from "../../../utils/indexToExpirationKey";
import Text from "../../../components/Text/Text";
import { useRef } from "react";

interface CardExpirationDateProps {
  handleChange: (value: string, index: number) => void;
  handleStep: () => void;
  step: number;
  cardExpirationDate: Record<ExpirationKey, string>;
  errorMessage: Record<ExpirationKey, string>;
}

const EXPIRATION_DATE_LABEL = {
  TITLE: "유효 기간을 입력해주세요.",
  DESCRIPTION: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  SUBTITLE: "유효기간",
  PLACE_HOLDER_YEAR: "YY",
  PLACE_HOLDER_MOMTH: "MM",
} as const;

export default function CardExpirationDate({
  handleChange,
  handleStep,
  step,
  cardExpirationDate,
  errorMessage,
}: CardExpirationDateProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const firstError =
    EXPIRATION_FIELDS.map(
      (_, idx) => errorMessage[indexToExpirationKey(idx)]
    ).find((msg) => msg) || "";

  const handleInputChange = (value: string, index: number) => {
    handleChange(value, index);
    if (value.length < 2) return;
    if (index < EXPIRATION_FIELDS.length - 1)
      inputRefs.current[index + 1].focus();
    if (canGoToNextStep(step, index, value, firstError)) {
      handleStep();
    }
  };

  return (
    <section className="card-expiration-date">
      <Text textType="title">{EXPIRATION_DATE_LABEL.TITLE}</Text>
      <Text textType="description">{EXPIRATION_DATE_LABEL.DESCRIPTION}</Text>
      <Text textType="subtitle">{EXPIRATION_DATE_LABEL.SUBTITLE}</Text>

      <div className={styles["card-number__input"]}>
        {Array.from({ length: EXPIRATION_FIELDS.length }, (_, idx) => (
          <Input
            key={idx}
            ref={(el) => {
              inputRefs.current[idx] = el!;
            }}
            onChange={(value) => handleInputChange(value, idx)}
            value={cardExpirationDate[indexToExpirationKey(idx)]}
            errorMessage={errorMessage[indexToExpirationKey(idx)]}
            placeholder="12"
          />
        ))}
      </div>

      <Text textType="error">{firstError}</Text>
    </section>
  );
}

function canGoToNextStep(
  step: number,
  index: number,
  value: string,
  errorMessage: string
) {
  if (step === 2 && !errorMessage && index === 1 && value.length === 2)
    return true;
  return false;
}
