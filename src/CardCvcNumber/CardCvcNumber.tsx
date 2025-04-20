import InputSubtitle from "../components/Subtitle/InputSubtitle";
import InputTitle from "../components/Title/InputTitle";
import styles from "./CardCvcNumber.module.css";
import Input from "../components/Input/Input";
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
      <Input
        onChange={handleChange}
        placeholder={CONSTANT_CARD_CVC_NUMBER.PLACE_HOLDER}
        value={cvcNumbers}
        errorMessage={errorMessage}
      />
      <InputErrorMessage message={errorMessage} />
    </section>
  );
}
