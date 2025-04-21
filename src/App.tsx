import "./App.css";
import CardNumber from "./CardNumber/CardNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";
import useExpirationDate from "./hooks/useExpirationDate";
import useCvcNumber from "./hooks/useCvcNumber";
import useCardNumbers from "./hooks/useCardNumbers";
import CardCompanyPicker from "./CardCompany/CardCompany";
import useCardCompany from "./hooks/useCardCompany";

function App() {
  const { cardNumbers, cardType, cardNumbersError, cardNumbersValidate } =
    useCardNumbers();
  const { cardExpirationDate, cardExpirationDateError, dateValidate } =
    useExpirationDate();
  const { cvcNumbers, cvcNumbersError, cvcNumbersValidate } = useCvcNumber();
  const { selectedCompany, selectCompany } = useCardCompany();

  return (
    <div className="App">
      <PreviewCardLayout
        cardNumbers={{
          first: cardNumbers[0],
          second: cardNumbers[1],
          third: cardNumbers[2],
          fourth: cardNumbers[3],
        }}
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
        <CardCompanyPicker
          selectedCompany={selectedCompany}
          selectCompany={selectCompany}
        />
      </div>
    </div>
  );
}

export default App;
