import InputNumber from "./components/Input/InputNumber";
import InputSubtitle from "./components/InputSubtitle/InputSubtitle";
import InputTitle from "./components/InputTitle/InputTitle";

export default function CardCvcNumber() {
  return (
    <section className="card-cvc">
      <InputTitle inputValue={"CVC 번호를"} />
      <InputSubtitle inputValue={"CVC"} />
      <InputNumber />
    </section>
  );
}
