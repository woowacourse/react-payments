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

  const handleCardNumber = (value: string, index: number) => {
    cardNumbersValidate(value, index);
    console.log(cardNumbers.join(" - "));
  };

  const handleCardExpirationDate = (value: string, index: number) => {
    dateValidate(value, index);
  };

  const handleCardCvcNumber = (value: string) => {
    cvcNumbersValidate(value);
    console.log(cvcNumbers);
  };

  return (
    <div className="App">
      <PreviewCardLayout
        cardNumbers={cardNumbers}
        cardType={cardType}
        cardExpirationDate={cardExpirationDate}
      />
      <div className="card-input">
        <CardNumber
          handleChange={handleCardNumber}
          cardNumbers={cardNumbers}
          errorMessage={cardNumbersError}
        />
        <CardExpirationDate
          handleChange={handleCardExpirationDate}
          cardExpirationDate={cardExpirationDate}
          errorMessage={cardExpirationDateError}
        />
        <CardCvcNumber
          handleChange={handleCardCvcNumber}
          cvcNumbers={cvcNumbers}
          errorMessage={cvcNumbersError}
        />
      </div>
    </div>
  );
}

export default App;
