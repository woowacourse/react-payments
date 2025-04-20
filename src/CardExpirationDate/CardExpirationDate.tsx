import InputErrorMessage from "../components/Input/InputErrorMessage";
import Input from "../components/Input/Input";
import InputDescription from "../components/Description/InputDescription";
import InputSubtitle from "../components/Subtitle/InputSubtitle";
import InputTitle from "../components/Title/InputTitle";
import styles from "./CardExpirationDate.module.css";
import { EXPIRATION_FIELDS, type ExpirationKey } from "../types/cardKeyTypes";
import { indexToExpirationKey } from "../utils/indexToExpirationKey";

interface CardExpirationDateProps {
  handleChange: (value: string, index: number) => void;
  cardExpirationDate: Record<ExpirationKey, string>;
  errorMessage: Record<ExpirationKey, string>;
}

const EXPIRATION_DATE_LABEL = {
  INPUT_TITLE: "유효 기간을",
  INPUT_DESCRIPTION: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  INPUT_SUBTITLE: "유효기간",
  PLACE_HOLDER_YEAR: "YY",
  PLACE_HOLDER_MOMTH: "MM",
} as const;

export default function CardExpirationDate({
  handleChange,
  cardExpirationDate,
  errorMessage,
}: CardExpirationDateProps) {
  const firstError =
    EXPIRATION_FIELDS.map(
      (_, idx) => errorMessage[indexToExpirationKey(idx)]
    ).find((msg) => msg) || "";

  return (
    <section className="card-expiration-date">
      <InputTitle inputValue={EXPIRATION_DATE_LABEL.INPUT_TITLE} />
      <InputDescription inputValue={EXPIRATION_DATE_LABEL.INPUT_DESCRIPTION} />
      <InputSubtitle inputValue={EXPIRATION_DATE_LABEL.INPUT_SUBTITLE} />
      <div className={styles["card-number__input"]}>
        <Input
          onChange={(value) => handleChange(value, 0)}
          placeholder={EXPIRATION_DATE_LABEL.PLACE_HOLDER_MOMTH}
          value={cardExpirationDate.MONTH}
          errorMessage={errorMessage.MONTH}
        />
        <Input
          onChange={(value) => handleChange(value, 1)}
          placeholder={EXPIRATION_DATE_LABEL.PLACE_HOLDER_YEAR}
          value={cardExpirationDate.YEAR}
          errorMessage={errorMessage.YEAR}
        />
      </div>
      <InputErrorMessage message={firstError} />
    </section>
  );
}
