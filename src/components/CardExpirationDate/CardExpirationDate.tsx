import InputErrorMessage from "../Input/InputErrorMessage";
import NumberInput from "../Input/CardNumberInput";
import InputText from "../InputText/InputText";
import styles from "./CardExpirationDate.module.css";
import useExpirationDateInputHandler from "../../hooks/useExpirationDate/useExpirationDateInputHandler";
interface CardExpirationDateProps {
  handleChange: (value: string, index: number) => void;
  cardExpirationDate: string[];
  errorMessage: string[];
  onComplete: () => void;
}

const EXPIRATION_DATE = {
  TITLE: "카드 유효기간을 입력해 주세요.",
  DESCRIPTION: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  SUBTITLE: "유효기간",
  PLACEHOLDER_YEAR: "YY",
  PLACEHOLDER_MONTH: "MM",
} as const;

export default function CardExpirationDate({
  handleChange,
  cardExpirationDate,
  errorMessage,
  onComplete,
}: CardExpirationDateProps) {
  const { handleCardExpirationDateChange } = useExpirationDateInputHandler(
    cardExpirationDate,
    errorMessage,
    handleChange,
    onComplete
  );

  const [monthValue, yearValue] = cardExpirationDate;
  const [monthErrorMessage, yearErrorMessage] = errorMessage;

  return (
    <section className="card-expiration-date">
      <InputText inputValue={EXPIRATION_DATE.TITLE} variant="title" />
      <InputText
        inputValue={EXPIRATION_DATE.DESCRIPTION}
        variant="description"
      />
      <InputText inputValue={EXPIRATION_DATE.SUBTITLE} variant="subtitle" />
      <div className={styles["card-number__input"]}>
        <NumberInput
          onChange={(value) => handleCardExpirationDateChange(value, 0)}
          placeholder={EXPIRATION_DATE.PLACEHOLDER_MONTH}
          value={monthValue}
          errorMessage={monthErrorMessage}
          type="text"
        />
        <NumberInput
          onChange={(value) => handleCardExpirationDateChange(value, 1)}
          placeholder={EXPIRATION_DATE.PLACEHOLDER_YEAR}
          value={yearValue}
          errorMessage={yearErrorMessage}
          type="text"
        />
      </div>
      <InputErrorMessage
        message={errorMessage.find((msg) => msg !== "") ?? ""}
      />
    </section>
  );
}
