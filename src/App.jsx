import { useMemo, useState } from "react";

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
  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState(["", ""]);

  const handleCardInfoSubmit = () => {
    alert(CARD_REGISTER_SUCCESS_MESSAGE);
  };

  const isCompleteCardNumber = useMemo(
    () => cardNumber.join("").length === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH,
    [cardNumber]
  );

  const isCompleteExpireDate = useMemo(
    () => expireDate.join("").length === EXPIRE_DATE_LENGTH,
    [expireDate]
  );

  const isCompleteSecurityCode = useMemo(
    () => securityCode.length === SECURITY_CODE_LENGTH,
    [securityCode]
  );

  const isCompletePassword = useMemo(
    () => password.join("").length === PASSWORD_LENGTH,
    [password]
  );

  const isValidCardInfo = useMemo(() => {
    return (
      isCompleteCardNumber &&
      isCompleteExpireDate &&
      isCompleteSecurityCode &&
      isCompletePassword
    );
  }, [
    isCompleteCardNumber,
    isCompleteExpireDate,
    isCompleteSecurityCode,
    isCompletePassword,
  ]);

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
      <Form setCardNumber={setCardNumber}>
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
      </Form>
      {isValidCardInfo && <Button text="다음" onClick={handleCardInfoSubmit} />}
    </div>
  );
}

export default App;
