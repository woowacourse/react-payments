import InputForm from "./components/InputForm/InputForm";
import Preview from "./components/Preview/Preview";
import { INPUT_TYPE } from "./constants/constants";

function App() {
  return (
    <>
      <Preview></Preview>
      <InputForm type={INPUT_TYPE.cardNumber}></InputForm>
      <InputForm type={INPUT_TYPE.expirationPeriod}></InputForm>
      <InputForm type={INPUT_TYPE.cvcNumber}></InputForm>
    </>
  );
}

export default App;
