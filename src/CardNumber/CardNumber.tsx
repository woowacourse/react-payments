import CardNumberInput from "../components/Input/CardNumberInput";
import InputText from "../components/InputText/InputText";
import styles from "./CardNumber.module.css";
import InputErrorMessage from "../components/Input/InputErrorMessage";

interface CardNumberProps {
  handleChange: (value: string, index: number) => void;
  cardNumbers: string[];
  errorMessage: string[];
}

const CONSTANT_CARD_NUMBER = {
  INPUT_TITLE: "결제할 카드 번호를",
  INPUT_DESCRIPTION: "본인 명의의 카드만 결제 가능합니다.",
  INPUT_SUBTITLE: "카드 번호",
} as const;

export default function CardNumber({
  handleChange,
  cardNumbers,
  errorMessage,
}: CardNumberProps) {
  return (
    <section className={styles["card-number"]}>
      <InputText
        inputValue={CONSTANT_CARD_NUMBER.INPUT_TITLE}
        variant="title"
      />
      <InputText
        inputValue={CONSTANT_CARD_NUMBER.INPUT_DESCRIPTION}
        variant="description"
      />
      <InputText
        inputValue={CONSTANT_CARD_NUMBER.INPUT_SUBTITLE}
        variant="subtitle"
      />
      <div className={styles["card-number__input"]}>
        {[0, 1, 2, 3].map((index) => (
          <CardNumberInput
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
