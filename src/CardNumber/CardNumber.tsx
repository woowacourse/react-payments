import CardNumberInput from "../components/Input/CardNumberInput";
import InputText from "../components/InputText/InputText";
import InputErrorMessage from "../components/Input/InputErrorMessage";
import styles from "./CardNumber.module.css";

interface Props {
  handleChange: (value: string, index: number) => void;
  cardNumbers: string[];
  errorMessage: string[];
  onComplete: () => void;
}

const CARD_NUMBER = {
  TITLE: "결제할 카드 번호를",
  DESCRIPTION: "본인 명의의 카드만 결제 가능합니다.",
  SUBTITLE: "카드 번호",
  MAX_LENGTH: 4,
} as const;

export default function CardNumber({
  handleChange,
  cardNumbers,
  errorMessage,
  onComplete,
}: Props) {
  const handleCardNumberInputNextFocus = (value: string, index: number) => {
    if (value.length === CARD_NUMBER.MAX_LENGTH && index < 3) {
      const nextInput =
        document.querySelectorAll<HTMLInputElement>("input.input-number")[
          index + 1
        ];
      nextInput?.focus();
    }
  };

  const handleCardNumberChange = (value: string, index: number) => {
    handleChange(value, index);
    handleCardNumberInputNextFocus(value, index);

    const updatedNumbers = [...cardNumbers];
    updatedNumbers[index] = value;
    const isComplete = updatedNumbers.every(
      (v) => v.length === CARD_NUMBER.MAX_LENGTH
    );

    if (isComplete) {
      onComplete();
    }
  };

  return (
    <section className="card-company">
      <InputText inputValue={CARD_NUMBER.TITLE} variant="title" />
      <InputText inputValue={CARD_NUMBER.DESCRIPTION} variant="description" />
      <InputText inputValue={CARD_NUMBER.SUBTITLE} variant="subtitle" />
      <div className={styles["card-number__input"]}>
        {["", "", "", ""].map((_, index) => (
          <CardNumberInput
            key={index}
            value={cardNumbers[index]}
            errorMessage={errorMessage[index]}
            onChange={(value) => handleCardNumberChange(value, index)}
          />
        ))}
      </div>
      <InputErrorMessage
        message={errorMessage.find((msg) => msg !== "") ?? ""}
      />
    </section>
  );
}
