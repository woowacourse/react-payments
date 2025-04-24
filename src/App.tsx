import "./App.css";
import CardNumber from "./CardNumber/CarNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";
import useExpirationDateInput from "./hooks/useExpirationDateInput";
import useCvcNumberInput from "./hooks/useCvcNumberInput";
import useCardNumbersInput from "./hooks/useCardNumbersInput";
import CardBrand from "./CardBrand/CardBrand";
import CardPassword from "./CardPassword/CardPassword";
import Button from "./components/Button/Button";

function App() {
  const { cardNumbers, cardType, cardNumbersError, onCardNumberChange } =
    useCardNumbersInput();
  const {
    cardExpirationDate,
    cardExpirationDateError,
    onExpirationDateChange,
  } = useExpirationDateInput();
  const { cvcNumbers, cvcNumbersError, onCvcNumberChange } =
    useCvcNumberInput();

  return (
    <div className="App">
      <PreviewCardLayout
        cardNumbers={cardNumbers}
        cardType={cardType}
        cardExpirationDate={cardExpirationDate}
      />
      <div className="card-input">
        <CardPassword handleChange={() => {}} />
        <CardCvcNumber
          handleChange={onCvcNumberChange}
          cvcNumbers={cvcNumbers}
          errorMessage={cvcNumbersError}
        />
        <CardExpirationDate
          handleChange={onExpirationDateChange}
          cardExpirationDate={cardExpirationDate}
          errorMessage={cardExpirationDateError}
        />
        <CardNumber
          handleChange={onCardNumberChange}
          cardNumbers={cardNumbers}
          errorMessage={cardNumbersError}
        />
        <CardBrand handleChange={() => {}} />
      </div>
      <Button text="확인" onClick={() => {}} />
    </div>
  );
}

export default App;
