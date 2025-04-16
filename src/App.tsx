import "./style.css";
import "./reset.css";
import LabeledInput from "./component/LabeledInput";

function App() {
  const cardNumber = {
    first: 1111,
    second: 1111,
    third: 1111,
    fourth: 1111,
    MM: 12,
    YY: 25,
    CVC: 123,
  };

  return (
    <>
      <LabeledInput label="레이블" errorMessage="에러입니다" type="periodMM" />
    </>
  );
}

export default App;
