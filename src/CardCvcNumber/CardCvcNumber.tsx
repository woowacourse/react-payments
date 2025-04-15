import InputSubtitle from "../components/InputSubtitle/InputSubtitle";
import InputTitle from "../components/InputTitle/InputTitle";
import styles from "./CardCvcNumber.module.css";
import InputNumber from "../components/Input/InputNumber";

export default function CardCvcNumber() {
  return (
    <section className={styles["card-cvc"]}>
      <InputTitle inputValue={"CVC 번호를"} />
      <InputSubtitle inputValue={"CVC"} />
      <InputNumber onChange={() => {}} placeholder="123" />
    </section>
  );
}
