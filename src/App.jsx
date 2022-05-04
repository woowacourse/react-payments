import { useState } from "react";

import GlobalStyle from "./globalStyles.jsx";

import PageHeader from "./PageHeader.jsx";
import Button from "./components/UIComponents/Button/Button.jsx";

import {
  CardPreview,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardExpireDateInput,
  Form,
} from "./components";
import { CARD_REGISTER_SUCCESS_MESSAGE, CARD_INFO_RULES } from "./constants.js";

const {
  NUMBER_UNIT_COUNT,
  NUMBER_UNIT_LENGTH,
  EXPIRE_DATE_LENGTH,
  SECURITY_CODE_LENGTH,
  PASSWORD_LENGTH,
} = CARD_INFO_RULES;

function App() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [holderName, setHolderName] = useState("");
  const [securityCodeLength, setSecurityCodeLength] = useState(0);
  const [passwordLength, setPasswordLength] = useState([0, 0]);

  const handleCardInfoSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target.form.elements.namedItem("expire-date"));
    alert(CARD_REGISTER_SUCCESS_MESSAGE);
  };

  const isCompleteCardNumber =
    cardNumber.join("").length === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH;

  const isCompleteExpireDate =
    expireDate.join("").length === EXPIRE_DATE_LENGTH;

  const isCompleteSecurityCode = securityCodeLength === SECURITY_CODE_LENGTH;

  const isCompletePassword =
    passwordLength[0] + passwordLength[1] === PASSWORD_LENGTH;

  const isValidCardInfo =
    isCompleteCardNumber &&
    isCompleteExpireDate &&
    isCompleteSecurityCode &&
    isCompletePassword;

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
      <Form dataKey={"card-info"}>
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
          securityCodeLength={securityCodeLength}
          setSecurityCodeLength={setSecurityCodeLength}
        />
        <CardPasswordInput
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        {isValidCardInfo && (
          <Button text="다음" onClick={handleCardInfoSubmit} />
        )}
      </Form>
    </div>
  );
}

export default App;
