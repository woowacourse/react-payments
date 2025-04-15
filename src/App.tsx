import { AppCSS } from "./App.styled";
import InputForm from "./components/InputForm/InputForm";
import Preview from "./components/Preview/Preview";
import { INPUT_TYPE } from "./constants/constants";

function App() {
  const cardNumbers = ["1234", "1233", "1232", "1211"];
  const expirationPeriod = ["02", "13"];

  return (
    <AppCSS>
      <Preview
        cardNumbers={cardNumbers}
        expirationPeriod={expirationPeriod}
      ></Preview>
      <InputForm type={INPUT_TYPE.cardNumber}></InputForm>
      <InputForm type={INPUT_TYPE.expirationPeriod}></InputForm>
      <InputForm type={INPUT_TYPE.cvcNumber}></InputForm>
    </AppCSS>
  );
}

export default App;
