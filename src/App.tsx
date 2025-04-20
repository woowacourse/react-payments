import "./App.css";
import CardNumber from "./CardNumber/CarNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";
import useExpirationDate from "./hooks/useExpirationDate";
import useCvcNumber from "./hooks/useCvcNumber";
import useCardNumbers from "./hooks/useCardNumbers";

function App() {
  const { cardNumbers, cardType, cardNumbersError, onCardNumberChange } =
    useCardNumbers();
  const {
    cardExpirationDate,
    cardExpirationDateError,
    onExpirationDateChange,
  } = useExpirationDate();
  const { cvcNumbers, cvcNumbersError, onCvcNumberChange } = useCvcNumber();

  return (
    <div className="App">
      <PreviewCardLayout
        cardNumbers={cardNumbers}
        cardType={cardType}
        cardExpirationDate={cardExpirationDate}
      />
      <div className="card-input">
        <CardNumber
          handleChange={onCardNumberChange}
          cardNumbers={cardNumbers}
          errorMessage={cardNumbersError}
        />
        <CardExpirationDate
          handleChange={onExpirationDateChange}
          cardExpirationDate={cardExpirationDate}
          errorMessage={cardExpirationDateError}
        />
        <CardCvcNumber
          handleChange={onCvcNumberChange}
          cvcNumbers={cvcNumbers}
          errorMessage={cvcNumbersError}
        />
      </div>
    </div>
  );
}

export default App;
