import "./App.css";
import CardNumber from "./CardNumber/CarNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import { useState } from "react";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";

function App() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardExpirationDate, setCardExpirationDate] = useState(["", ""]);
  const [cardCvcNumber, setCardCvcNumber] = useState([""]);

  const handleCardNumber = (value: string, index: number) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value;
    setCardNumbers(newCardNumbers);
    console.log(newCardNumbers.join(" - "));
  };

  const handleCardExpirationDate = (value: string, index: number) => {
    const newCardExpirationDate = [...cardExpirationDate];
    newCardExpirationDate[index] = value;
    setCardExpirationDate(newCardExpirationDate);
    console.log(newCardExpirationDate);
  };

const handleCardCvcNumber = 

return (
    <div className="App">
      <PreviewCardLayout
        cardNumbers={cardNumbers}
        cardExpirationDate={cardExpirationDate}
      />
      <div className="card-input">
        <CardNumber handleChange={handleCardNumber} />
        <CardExpirationDate handleChange={handleCardExpirationDate} />
        <CardCvcNumber />
      </div>
    </div>
  );
}

export default App;
