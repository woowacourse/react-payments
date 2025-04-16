import InputNumber from "../components/Input/InputNumber";
import InputDescription from "../components/InputDescription/InputDescription";
import InputSubtitle from "../components/InputSubtitle/InputSubtitle";
import InputTitle from "../components/InputTitle/InputTitle";
import styles from "./CardNumber.module.css";
import InputErrorMessage from "../components/Input/InputErrorMessage";

interface CardNumberProps {
  handleChange: (value: string, index: number) => void;
  cardNumbers: string[];
  errorMessage: string[];
}

export default function CardNumber({
  handleChange,
  cardNumbers,
  errorMessage,
}: CardNumberProps) {
  return (
    <section className={styles["card-number"]}>
      <InputTitle inputValue={"결제할 카드 번호를"} />
      <InputDescription inputValue={"본인 명의의 카드만 결제 가능합니다."} />
      <InputSubtitle inputValue={"카드 번호"} />
      <div className={styles["card-number__input"]}>
        {[0, 1, 2, 3].map((index) => (
          <InputNumber
            key={index}
            value={cardNumbers[index]}
            errorMessage={errorMessage[index]}
            onChange={(value) => handleChange(value, index)}
          />
        ))}
      </div>
      <InputErrorMessage
        message={errorMessage.find((msg) => msg !== "") ?? ""}
      />
    </section>
  );
}
