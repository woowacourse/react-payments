import InputErrorMessage from "../components/Input/InputErrorMessage";
import InputNumber from "../components/Input/InputNumber";
import InputText from "../components/InputText/InputText";
import styles from "./CardExpirationDate.module.css";

interface CardExpirationDateProps {
  handleChange: (value: string, index: number) => void;
  cardExpirationDate: { month: string; year: string };
  errorMessage: string[];
}

const CONSTANT_EXPIRATION_DATE = {
  INPUT_TITLE: "유효 기간을",
  INPUT_DESCRIPTION: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  INPUT_SUBTITLE: "유효기간",
  PLACE_HOLDER_YEAR: "YY",
  PLACE_HOLDER_MONTH: "MM",
} as const;

export default function CardExpirationDate({
  handleChange,
  cardExpirationDate,
  errorMessage,
}: CardExpirationDateProps) {
  return (
    <section className="card-expiration-date">
      <InputText
        inputValue={CONSTANT_EXPIRATION_DATE.INPUT_TITLE}
        variant="title"
      />
      <InputText
        inputValue={CONSTANT_EXPIRATION_DATE.INPUT_DESCRIPTION}
        variant="description"
      />
      <InputText
        inputValue={CONSTANT_EXPIRATION_DATE.INPUT_SUBTITLE}
        variant="subtitle"
      />
      <div className={styles["card-number__input"]}>
        <InputNumber
          onChange={(value) => handleChange(value, 0)}
          placeholder={CONSTANT_EXPIRATION_DATE.PLACE_HOLDER_MONTH}
          value={cardExpirationDate.month}
          errorMessage={errorMessage[0]}
        />
        <InputNumber
          onChange={(value) => handleChange(value, 1)}
          placeholder={CONSTANT_EXPIRATION_DATE.PLACE_HOLDER_YEAR}
          value={cardExpirationDate.year}
          errorMessage={errorMessage[1]}
        />
      </div>
      <InputErrorMessage
        message={errorMessage.find((msg) => msg !== "") ?? ""}
      />
    </section>
  );
}
