import "./App.css";
import InputContainer from "./components/InputContainer/InputContainer";
import CardNumbersInput from "./components/CardNumbersInput/CardNumbersInput";

function App() {

  return (
    <>
      <form>
      <InputContainer title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다.">
        <CardNumbersInput /> 
      </InputContainer>
      </form>
    </>
  );
}

export default App;
