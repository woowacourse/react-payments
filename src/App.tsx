import "./App.css";
import { useState } from "react";
import CardNumber from "./components/CardNumber/CardNumber";
import CardExpirationDate from "./components/CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./components/CardCvcNumber/CardCvcNumber";
import PreviewCardLayout from "./components/PreviewCard/PreviewCardLayout";
import CardCompanyPicker from "./components/CardCompany/CardCompany";
import CardPassword from "./components/CardPassword/CardPassword";
import useCardNumbersState from "./hooks/useCardNumber/useCardNumberState";
import useExpirationDateState from "./hooks/useExpirationDate/useExpirationDateState";
import useCvcNumberState from "./hooks/useCvcNumber/useCvcNumberState";
import useCardCompanyState from "./hooks/useCardCompany/useCardCompanyState";
import useCardPasswordState from "./hooks/useCardPassword/useCardPasswordState";
import CheckButton from "./components/CheckButton";

function App() {
  const { cardNumbers, cardType, cardNumbersError, handleChange } =
    useCardNumbersState();
  const { cardExpirationDate, cardExpirationDateError, dateValidate } =
    useExpirationDateState();
  const { cvcNumbers, cvcNumbersError, cvcNumbersValidate } =
    useCvcNumberState();
  const { selectedCompany, selectCompany } = useCardCompanyState();
  const { password, passwordError, passwordValidate } = useCardPasswordState();
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
      <div className="checkButton-container">
        {step >= 6 && <CheckButton />}
      </div>
    </div>
  );
}

export default App;
