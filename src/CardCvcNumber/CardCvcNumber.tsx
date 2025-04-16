import InputSubtitle from "../components/InputSubtitle/InputSubtitle";
import InputTitle from "../components/InputTitle/InputTitle";
import styles from "./CardCvcNumber.module.css";
import InputNumber from "../components/Input/InputNumber";
import InputErrorMessage from "../components/Input/InputErrorMessage";

interface CardCvcNumberProps {
  handleChange: (value: string) => void;
  cvcNumbers: string;
  errorMessage: string;
}

export default function CardCvcNumber({
  handleChange,
  cvcNumbers,
  errorMessage,
}: CardCvcNumberProps) {
  return (
    <section className={styles["card-cvc"]}>
      <InputTitle inputValue={"CVC 번호를"} />
      <InputSubtitle inputValue={"CVC"} />
      <InputNumber
        onChange={handleChange}
        placeholder="123"
        maxLength={3}
        value={cvcNumbers}
        errorMessage={errorMessage}
      />
      <InputErrorMessage message={errorMessage} />
    </section>
  );
}
