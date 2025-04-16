import "./App.css";
import Announcement from "./components/Announcement";
import Card from "./components/Card";
import CardNumberForm from "./components/CardNumberForm";

function App() {
  return (
    <>
      <Card cardNumber={[1234, 1234, 1234, 1234]} expiration={[12, 12]}></Card>
      <Announcement
        main="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      ></Announcement>
      <CardNumberForm maxLength={4} />
    </>
  );
}

export default App;
