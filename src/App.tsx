import CardInputBox from "./components/CardInputBox/CardInputBox";
import CardNumberInputs from "./components/CardNumberInputs/CardNumberInputs";
import useControlledCardNumber from "./hooks/useControlledCardNumber";

function App() {
  const { cardNumberState, handleCardNumberChange } = useControlledCardNumber();

  return (
    <div style={{ width: "1280px", margin: "4rem auto 0" }}>
      <CardInputBox
        title="결제할 카드 번호를 입력해 주세요"
        guideText="본인 명의의 카드만 결제 가능합니다."
        InputComponents={
          <CardNumberInputs
            cardNumberState={cardNumberState}
            onCardNumberChange={handleCardNumberChange}
          />
        }
      />
    </div>
  );
}

export default App;
