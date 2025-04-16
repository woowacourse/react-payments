import InputErrorMessage from "../components/Input/InputErrorMessage";
import InputNumber from "../components/Input/InputNumber";
import InputDescription from "../components/InputDescription/InputDescription";
import InputSubtitle from "../components/InputSubtitle/InputSubtitle";
import InputTitle from "../components/InputTitle/InputTitle";
import styles from "./CardExpirationDate.module.css";

interface CardExpirationDateProps {
  handleChange: (value: string, index: number) => void;
  cardExpirationDate: string[];
  errorMessage: string[];
}

export default function CardExpirationDate({
  handleChange,
  cardExpirationDate,
  errorMessage,
}: CardExpirationDateProps) {
  return (
    <section className="card-expiration-date">
      <InputTitle inputValue={"유효 기간을"} />
      <InputDescription
        inputValue={"월/년도(MMYY)를 순서대로 입력해 주세요."}
      />
      <InputSubtitle inputValue={"유효기간"} />
      <div className={styles["card-number__input"]}>
        <InputNumber
          onChange={(value) => handleChange(value, 0)}
          placeholder="MM"
          value={cardExpirationDate[0]}
          errorMessage={errorMessage[0]}
        />
        <InputNumber
          onChange={(value) => handleChange(value, 1)}
          placeholder="YY"
          value={cardExpirationDate[1]}
          errorMessage={errorMessage[1]}
        />
      </div>
      <InputErrorMessage
        message={errorMessage.find((msg) => msg !== "") ?? ""}
      />
    </section>
  );
}
