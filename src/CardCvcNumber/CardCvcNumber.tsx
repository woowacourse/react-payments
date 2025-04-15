import InputNumber from "../components/Input/InputNumber";
import InputSubtitle from "../components/InputSubtitle/InputSubtitle";
import InputTitle from "../components/InputTitle/InputTitle";
import styles from "./CardCvcNumber.module.css";

export default function CardCvcNumber() {
  return (
    <section className={styles["card-cvc"]}>
      <InputTitle inputValue={"CVC 번호를"} />
      <InputSubtitle inputValue={"CVC"} />
      <InputNumber />
    </section>
  );
}
