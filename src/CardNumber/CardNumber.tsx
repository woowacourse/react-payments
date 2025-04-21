import { useRef } from "react";
import CardNumberInput from "../components/Input/CardNumberInput";
import InputText from "../components/InputText/InputText";
import InputErrorMessage from "../components/Input/InputErrorMessage";
import styles from "./CardNumber.module.css";

interface Props {
  handleChange: (value: string, index: number) => void;
  cardNumbers: string[];
  errorMessage: string[];
}

export default function CardNumber({
  handleChange,
  cardNumbers,
  errorMessage,
}: Props) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  return (
    <section className={styles["card-number"]}>
      <InputText inputValue="결제할 카드 번호를" variant="title" />
      <InputText
        inputValue="본인 명의의 카드만 결제 가능합니다."
        variant="description"
      />
      <InputText inputValue="카드 번호" variant="subtitle" />
      <div className={styles["card-number__input"]}>
        {[0, 1, 2, 3].map((index) => (
          <CardNumberInput
            key={index}
            ref={(el: HTMLInputElement | null) => {
              inputRefs.current[index] = el;
            }}
            value={cardNumbers[index]}
            errorMessage={errorMessage[index]}
            onChange={(value) => {
              handleChange(value, index);
              if (value.length === 4 && index < 3) {
                inputRefs.current[index + 1]?.focus();
              }
            }}
          />
        ))}
      </div>
      <InputErrorMessage
        message={errorMessage.find((msg) => msg !== "") ?? ""}
      />
    </section>
  );
}
