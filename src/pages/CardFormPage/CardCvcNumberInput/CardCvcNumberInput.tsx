import styles from "./CardCvcNumberInput.module.css";
import Input from "../../../components/Input/Input";
import Text from "../../../components/Text/Text";

interface CardCvcNumberProps {
  handleChange: (value: string, step: number) => void;
  step: number;
  cvcNumbers: string;
  errorMessage: string;
}

const CARD_CVC_NUMBER_LABEL = {
  TITLE: "CVC 번호를 입력해주세요.",
  SUBTITLE: "CVC",
  PLACE_HOLDER: "123",
} as const;

export default function CardCvcNumberInput({
  handleChange,
  step,
  cvcNumbers,
  errorMessage,
}: CardCvcNumberProps) {
  return (
    <section className={styles["card-cvc"]}>
      <Text textType="title">{CARD_CVC_NUMBER_LABEL.TITLE}</Text>
      <Text textType="subtitle">{CARD_CVC_NUMBER_LABEL.SUBTITLE}</Text>
      <Input
        onChange={(value) => handleChange(value, step)}
        placeholder={CARD_CVC_NUMBER_LABEL.PLACE_HOLDER}
        value={cvcNumbers}
        errorMessage={errorMessage}
        autoFocus={true}
      />
      <Text textType="error">{errorMessage}</Text>
    </section>
  );
}
