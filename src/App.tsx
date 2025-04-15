import "./App.css";
import InputContainer from "./components/InputContainer/InputContainer";
import CardNumbersInput from "./components/CardNumbersInput/CardNumbersInput";
import CardExpiryInput from "./components/CardExpiryInput/CardExpiryInput";
import CVCInput from "./components/CVCInput/CVCInput";

function App() {

  return (
    <>
      <form>
      <InputContainer title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다.">
        <CardNumbersInput /> 
      </InputContainer>
      <InputContainer title="카드 유효기간을 입력해 주세요" subTitle="월/년도(MMYY)를 순서대로 입력해 주세요.">
        <CardExpiryInput/>
      </InputContainer>
      <InputContainer title="CVC 번호를 입력해 주세요">
        <CVCInput/>
      </InputContainer>
      </form>
    </>
  );
}

export default App;
