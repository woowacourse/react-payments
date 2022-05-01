import { useMemo, useState } from "react";

import GlobalStyle from "./globalStyles.jsx";

import PageHeader from "./PageHeader.jsx";
import CardInfoForm from "./CardInfoForm.jsx";
import Button from "./components/UIComponents/Button/Button.jsx";

import {
  CardPreview,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardExpireDateInput,
} from "./components";
import { CARD_REGISTER_SUCCESS_MESSAGE, CARD_INFO_RULES } from "./constants.js";

function App() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [holderName, setHolderName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState(["", ""]);

  const handleCardInfoSubmit = () => {
    alert(CARD_REGISTER_SUCCESS_MESSAGE);
  };

  const isValidCardInfo = useMemo(() => {
    const {
      NUMBER_UNIT_COUNT,
      NUMBER_UNIT_LENGTH,
      EXPIRE_DATE_LENGTH,
      SECURITY_CODE_LENGTH,
      PASSWORD_LENGTH,
    } = CARD_INFO_RULES;

    return (
      cardNumber.join("").length === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH &&
      expireDate.join("").length === EXPIRE_DATE_LENGTH &&
      securityCode.length === SECURITY_CODE_LENGTH &&
      password.join("").length === PASSWORD_LENGTH
    );
  }, [cardNumber, expireDate, securityCode, password]);

  return (
    <div className="App">
      <GlobalStyle />
      <PageHeader />
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
        canProceed={isValidCardInfo}
      />
      <CardInfoForm autoComplete="off">
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
        <CardExpireDateInput
          expireDate={expireDate}
          setExpireDate={setExpireDate}
        />
        <CardHolderNameInput
          holderName={holderName}
          setHolderName={setHolderName}
        />
        <CardSecurityCodeInput
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
        />
        <CardPasswordInput password={password} setPassword={setPassword} />
      </CardInfoForm>
      {isValidCardInfo && <Button text="다음" onClick={handleCardInfoSubmit} />}
    </div>
  );
}

export default App;
