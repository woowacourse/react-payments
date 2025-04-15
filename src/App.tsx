import CardNumberInputs from "./components/CardNumberInputs/CardNumberInputs";
import useControlledCardNumber from "./hooks/useControlledCardNumber";

function App() {
  const { cardNumberState, handleCardNumberChange } = useControlledCardNumber();

  return (
    <>
      <CardNumberInputs
        cardNumberState={cardNumberState}
        onCardNumberChange={handleCardNumberChange}
      />
    </>
  );
}

export default App;
