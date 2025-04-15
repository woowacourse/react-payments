import InputSubtitle from "../components/InputSubtitle/InputSubtitle";
import InputTitle from "../components/InputTitle/InputTitle";
import styles from "./CardCvcNumber.module.css";
import InputNumber from "../components/Input/InputNumber";

interface CardCvcNumberProps {
  handleChange: (value: string) => void;
}

export default function CardCvcNumber({ handleChange }: CardCvcNumberProps) {
  return (
    <section className={styles["card-cvc"]}>
      <InputTitle inputValue={"CVC 번호를"} />
      <InputSubtitle inputValue={"CVC"} />
      <InputNumber onChange={handleChange} placeholder="123" maxLength={3} />
    </section>
  );
}
