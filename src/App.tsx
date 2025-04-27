import { useState } from "react";
import "./App.css";
import CardCompanyPicker from "./components/CardCompany/CardCompany";
import CardCvcNumber from "./components/CardCvcNumber/CardCvcNumber";
import CardExpirationDate from "./components/CardExpirationDate/CardExpirationDate";
import CardNumber from "./components/CardNumber/CardNumber";
import CardPassword from "./components/CardPassword/CardPassword";
import CheckButton from "./components/CheckButton";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";
import useCardCompanyState from "./hooks/useCardCompany/useCardCompanyState";
import useCardNumbersState from "./hooks/useCardNumber/useCardNumberState";
import useExpirationDateState from "./hooks/useExpirationDate/useExpirationDateState";

function App() {
  const { cardNumbers, cardType, cardNumbersError, handleChange } =
    useCardNumbersState();
  const { cardExpirationDate, cardExpirationDateError, dateValidate } =
    useExpirationDateState();
  const [cvcNumbers, setCvcNumbers] = useState("");
  const { selectedCompany, selectCompany } = useCardCompanyState();
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  const goToStep = (targetStep: number) => {
    setStep(targetStep);
  };

  return (
    <div className="App">
      <PreviewCardLayout
        selectedCompany={selectedCompany?.value ?? ""}
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
          handleChange={handleChange}
          cardNumbers={cardNumbers}
          errorMessage={cardNumbersError}
          onComplete={() => goToStep(2)}
        />
        {step >= 2 && (
          <CardCompanyPicker
            selectedCompany={selectedCompany}
            selectCompany={selectCompany}
            onComplete={() => goToStep(3)}
          />
        )}
        {step >= 3 && (
          <CardExpirationDate
            handleChange={dateValidate}
            cardExpirationDate={cardExpirationDate}
            errorMessage={cardExpirationDateError}
            onComplete={() => goToStep(4)}
          />
        )}
        {step >= 4 && (
          <CardCvcNumber
            numbers={cvcNumbers}
            setNumbers={setCvcNumbers}
            onComplete={() => goToStep(5)}
          />
        )}

        {step >= 5 && (
          <CardPassword
            password={password}
            setPassword={setPassword}
            onComplete={() => goToStep(6)}
          />
        )}
      </div>
      <div className="checkButton-container">
        {step >= 6 && <CheckButton />}
      </div>
    </div>
  );
}

export default App;
