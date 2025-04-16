import "./style.css";
import "./reset.css";
import Card from "./component/Card";

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
      <Card cardNumber={cardNumber} cardType="mastercard" />
    </>
  );
}

export default App;
