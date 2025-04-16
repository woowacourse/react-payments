import "./App.css";
import Announcement from "./components/Announcement";
import Card from "./components/Card";
import CardNumberForm from "./components/CardNumberForm";
import CardExpirationForm from "./components/CardExpirationForm";
import CardCVCForm from "./components/CardCVCForm";

function App() {
  return (
    <>
      <Card cardNumber={[1234, 1234, 1234, 1234]} expiration={[12, 12]}></Card>
      <Announcement
        main="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      ></Announcement>
      <CardNumberForm maxLength={4} />
      <Announcement
        main="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      ></Announcement>
      <CardExpirationForm maxLength={2} />
      <Announcement main="CVC 번호를 입력해 주세요"></Announcement>
      <CardCVCForm maxLength={3} />
    </>
  );
}

export default App;
