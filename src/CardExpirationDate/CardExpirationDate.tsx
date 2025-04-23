import InputErrorMessage from "../components/Input/InputErrorMessage";
import CardNumberInput from "../components/Input/CardNumberInput";
import InputText from "../components/InputText/InputText";
import styles from "./CardExpirationDate.module.css";

interface CardExpirationDateProps {
  handleChange: (value: string, index: number) => void;
  cardExpirationDate: { month: string; year: string };
  errorMessage: string[];
}

const EXPIRATION_DATE = {
  TITLE: "카드 유효기간을",
  DESCRIPTION: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  SUBTITLE: "유효기간",
  PLACEHOLDER_YEAR: "YY",
  PLACEHOLDER_MONTH: "MM",
} as const;

export default function CardExpirationDate({
  handleChange,
  cardExpirationDate,
  errorMessage,
}: CardExpirationDateProps) {
  return (
    <section className="card-expiration-date">
      <InputText inputValue={EXPIRATION_DATE.TITLE} variant="title" />
      <InputText
        inputValue={EXPIRATION_DATE.DESCRIPTION}
        variant="description"
      />
      <InputText inputValue={EXPIRATION_DATE.SUBTITLE} variant="subtitle" />
      <div className={styles["card-number__input"]}>
        <CardNumberInput
          onChange={(value) => handleChange(value, 0)}
          placeholder={CONSTANT_EXPIRATION_DATE.PLACE_HOLDER_MONTH}
          value={cardExpirationDate.month}
          errorMessage={errorMessage[0]}
        />
        <CardNumberInput
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
