import GlobalStyle from "./globalStyles";

import PageHeader from "./components/PageHeader";
import CardInfoForm from "./components/CardInfoForm";
import CardPreview from "./components/UIComponents/CardPreview/CardPreview";
import Button from "./components/UIComponents/Button/Button";

import useInput from "./Hooks/useInput.jsx";

import {
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardExpireDateInput,
} from "./components";
import {
  initialCardNumber,
  initialPassword,
  initialExpireDate,
  initialHolderName,
  initialSecurityCode,
} from "./data/initialData";
import {
  isInValidCardNumber,
  isInValidExpireDate,
  isInValidHolderName,
  isInvalidSecurityCode,
  isInvalidPassword,
  isValidCardInfo,
} from "./validators/validator";

function App() {
  const [cardNumber, handleCardNumberUpdate] = useInput(
    initialCardNumber,
    isInValidCardNumber
  );
  const [expireDate, handleExpireDateUpdate] = useInput(
    initialExpireDate,
    isInValidExpireDate
  );
  const [holderName, handleHolderNameUpdate] = useInput(
    initialHolderName,
    isInValidHolderName
  );
  const [securityCode, handleSecurityCodeUpdate] = useInput(
    initialSecurityCode,
    isInvalidSecurityCode
  );
  const [password, handlePasswordUpdate] = useInput(
    initialPassword,
    isInvalidPassword
  );

  return (
    <div className="App">
      <GlobalStyle />
      <PageHeader />
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
        canProceed={isValidCardInfo(
          cardNumber.cardNumberInfo,
          expireDate.expireDateInfo,
          securityCode.securityCodeInfo,
          password.passwordInfo
        )}
      />
      <CardInfoForm>
        <CardNumberInput
          cardNumber={cardNumber}
          onChange={handleCardNumberUpdate}
        />
        <CardExpireDateInput
          expireDate={expireDate}
          onChange={handleExpireDateUpdate}
        />
        <CardHolderNameInput
          holderName={holderName}
          onChange={handleHolderNameUpdate}
        />
        <CardSecurityCodeInput
          securityCode={securityCode}
          onChange={handleSecurityCodeUpdate}
        />
        <CardPasswordInput
          password={password}
          onChange={handlePasswordUpdate}
        />
        {isValidCardInfo(
          cardNumber.cardNumberInfo,
          expireDate.expireDateInfo,
          securityCode.securityCodeInfo,
          password.passwordInfo
        ) && <Button text="다음" type="submit" />}
      </CardInfoForm>
    </div>
  );
}

export default App;
