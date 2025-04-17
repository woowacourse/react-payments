import { useState } from "react";
import CardNumbersInput from "./components/CardNumbersInput/CardNumbersInput";
import CardExpiryInput from "./components/CardExpiryInput/CardExpiryInput";
import CVCInput from "./components/CVCInput/CVCInput";
import CardPreview from "./components/CardPreview/CardPreview";
import { CARD_VALIDATION_INFO } from "./constants/CardValidationInfo";
import "./App.css";

function App() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(
    Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill(""),
  );
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVC, setCVC] = useState("");

  return (
    <div className="app">
      <CardPreview cardNumbers={cardNumbers} month={month} year={year} />
      <form>
        <CardNumbersInput
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
        />
        <CardExpiryInput
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <CVCInput CVC={CVC} setCVC={setCVC} />
      </form>
    </div>
  );
}

export default App;
