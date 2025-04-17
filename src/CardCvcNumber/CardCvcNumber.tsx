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

const CONSTANT_CARD_CVC_NUMBER = {
  INPUT_TITLE: "CVC 번호를",
  INPUT_SUBTITLE: "CVC",
  PLACE_HOLDER: "123",
} as const;

export default function CardCvcNumber({
  handleChange,
  cvcNumbers,
  errorMessage,
}: CardCvcNumberProps) {
  return (
    <section className={styles["card-cvc"]}>
      <InputTitle inputValue={CONSTANT_CARD_CVC_NUMBER.INPUT_TITLE} />
      <InputSubtitle inputValue={CONSTANT_CARD_CVC_NUMBER.INPUT_SUBTITLE} />
      <InputNumber
        onChange={handleChange}
        placeholder={CONSTANT_CARD_CVC_NUMBER.PLACE_HOLDER}
        value={cvcNumbers}
        errorMessage={errorMessage}
      />
      <InputErrorMessage message={errorMessage} />
    </section>
  );
}
