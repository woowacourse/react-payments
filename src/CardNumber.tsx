import InputNumber from "./components/Input/InputNumber";
import InputDescription from "./components/InputDescription/InputDescription";
import InputSubtitle from "./components/InputSubtitle/InputSubtitle";
import InputTitle from "./components/InputTitle/InputTitle";

export default function CardNumber() {
  return (
    <section className="card-number">
      <InputTitle inputValue={"결제할 카드 번호를"} />
      <InputDescription inputValue={"본인 명의의 카드만 결제 가능합니다."} />
      <InputSubtitle inputValue={"카드 번호"} />
      <div className="card-number__input">
        <InputNumber />
        <InputNumber />
        <InputNumber />
        <InputNumber />
      </div>
    </section>
  );
}
