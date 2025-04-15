import "./App.css";
import CardNumber from "./CardNumber/CarNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import { useState } from "react";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";

function App() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);

  const handleCardNumber = (value: string, index: number) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value;
    setCardNumbers(newCardNumbers);
    console.log(newCardNumbers.join(" - "));
  };

  return (
    <div className="App">
      <PreviewCardLayout cardNumbers={cardNumbers} />
      <div className="card-input">
        <CardNumber handleChange={handleCardNumber} />
        <CardExpirationDate />
        <CardCvcNumber />
      </div>
    </div>
  );
}

export default App;
