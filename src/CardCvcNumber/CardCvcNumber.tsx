import styles from "./CardCvcNumber.module.css";
import Input from "../components/Input/Input";
import Text from "../components/Text/Text";

interface CardCvcNumberProps {
  handleChange: (value: string) => void;
  cvcNumbers: string;
  errorMessage: string;
}

const CARD_CVC_NUMBER_LABEL = {
  INPUT_TITLE: "CVC 번호를 입력해주세요.",
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
      <Text textType="title">{CARD_CVC_NUMBER_LABEL.INPUT_TITLE}</Text>
      <Text textType="subtitle">{CARD_CVC_NUMBER_LABEL.INPUT_SUBTITLE}</Text>
      <Input
        onChange={handleChange}
        placeholder={CARD_CVC_NUMBER_LABEL.PLACE_HOLDER}
        value={cvcNumbers}
        errorMessage={errorMessage}
      />
      <Text textType="error">{errorMessage}</Text>
    </section>
  );
}
