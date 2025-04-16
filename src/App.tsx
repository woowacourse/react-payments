import "./App.css";
import CardNumber from "./CardNumber/CarNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";
import useCardNumbers from "./hooks/useCardNumbers";
import useExpirationDate from "./hooks/useExpirationDate";
import useCvcNumber from "./hooks/useCvcNumber";

function App() {
  const { cardNumbers, cardType, cardNumbersError, cardNumbersValidate } =
    useCardNumbers();
  const { cardExpirationDate, cardExpirationDateError, dateValidate } =
    useExpirationDate();
  const { cvcNumbers, cvcNumbersError, cvcNumbersValidate } = useCvcNumber();

  return (
    <div className="App">
      <PreviewCardLayout
        cardNumbers={cardNumbers}
        cardType={cardType}
        cardExpirationDate={cardExpirationDate}
      />
      <div className="card-input">
        <CardNumber
          handleChange={cardNumbersValidate}
          cardNumbers={cardNumbers}
          errorMessage={cardNumbersError}
        />
        <CardExpirationDate
          handleChange={dateValidate}
          cardExpirationDate={cardExpirationDate}
          errorMessage={cardExpirationDateError}
        />
        <CardCvcNumber
          handleChange={cvcNumbersValidate}
          cvcNumbers={cvcNumbers}
          errorMessage={cvcNumbersError}
        />
      </div>
    </div>
  );
}

export default App;
