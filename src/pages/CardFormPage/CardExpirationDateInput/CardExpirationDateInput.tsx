import Input from "../../../components/Input/Input";
import styles from "./CardExpirationDateInput.module.css";
import {
  EXPIRATION_FIELDS,
  type ExpirationKey,
} from "../../../types/cardKeyTypes";
import { indexToExpirationKey } from "../../../utils/indexToExpirationKey";
import Text from "../../../components/Text/Text";
import { useRef } from "react";

interface CardExpirationDateProps {
  handleChange: (
    value: string,
    index: number,
    step: number,
    inputRefs: React.MutableRefObject<HTMLInputElement[]>
  ) => void;
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

export default function CardExpirationDateInput({
  handleChange,
  step,
  cardExpirationDate,
  errorMessage,
}: CardExpirationDateProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const firstError =
    EXPIRATION_FIELDS.map(
      (_, idx) => errorMessage[indexToExpirationKey(idx)]
    ).find((msg) => msg) || "";

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
            onChange={(value) => handleChange(value, idx, step, inputRefs)}
            value={cardExpirationDate[indexToExpirationKey(idx)]}
            errorMessage={errorMessage[indexToExpirationKey(idx)]}
            placeholder="12"
            autoFocus={idx === 0}
          />
        ))}
      </div>

      <Text textType="error">{firstError}</Text>
    </section>
  );
}
