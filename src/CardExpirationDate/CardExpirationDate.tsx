import InputNumber from "../components/Input/InputNumber";
import InputDescription from "../components/InputDescription/InputDescription";
import InputSubtitle from "../components/InputSubtitle/InputSubtitle";
import InputTitle from "../components/InputTitle/InputTitle";
import styles from "./CardExpirationDate.module.css";

export default function CardExpirationDate() {
  return (
    <section className="card-expiration-date">
      <InputTitle inputValue={"유효 기간을"} />
      <InputDescription
        inputValue={"월/년도(MMYY)를 순서대로 입력해 주세요."}
      />
      <InputSubtitle inputValue={"유효기간"} />
      <div className={styles["card-number__input"]}>
        <InputNumber />
        <InputNumber />
      </div>
    </section>
  );
}
