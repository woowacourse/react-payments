import "./App.css";
import { useState } from "react";
import CardNumber from "./CardNumber/CardNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";
import useExpirationDate from "./hooks/useExpirationDate";
import useCvcNumber from "./hooks/useCvcNumber";
import useCardNumbersState from "./hooks/useCardNumber/useCardNumberState";
import CardCompanyPicker from "./CardCompany/CardCompany";
import useCardCompany from "./hooks/useCardCompany";
import useCardPassword from "./hooks/useCardPassword";
import CardPassword from "./CardPassword/CardPassword";

function App() {
  const { cardNumbers, cardType, cardNumbersError, handleChange } =
    useCardNumbersState();
  const { cardExpirationDate, cardExpirationDateError, dateValidate } =
    useExpirationDate();
  const { cvcNumbers, cvcNumbersError, cvcNumbersValidate } = useCvcNumber();
  const { selectedCompany, selectCompany } = useCardCompany();
  const { password, passwordError, passwordValidate } = useCardPassword();
  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    setStep((prev) => prev + 1);
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
          onComplete={goToNextStep}
        />
        {step >= 2 && (
          <CardCompanyPicker
            selectedCompany={selectedCompany}
            selectCompany={selectCompany}
            onComplete={goToNextStep}
          />
        )}
        {step >= 3 && (
          <CardExpirationDate
            handleChange={dateValidate}
            cardExpirationDate={cardExpirationDate}
            errorMessage={cardExpirationDateError}
            onComplete={goToNextStep}
          />
        )}
        {step >= 4 && (
          <CardCvcNumber
            handleChange={cvcNumbersValidate}
            cvcNumbers={cvcNumbers}
            errorMessage={cvcNumbersError}
            onComplete={goToNextStep}
          />
        )}

        {step >= 5 && (
          <CardPassword
            handleChange={passwordValidate}
            password={password}
            errorMessage={passwordError}
            onComplete={goToNextStep}
          />
        )}
      </div>
    </div>
  );
}

export default App;
