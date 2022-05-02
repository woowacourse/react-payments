import { useCallback, useEffect, useRef, useState } from "react";

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

import {
  CARD_REGISTER_SUCCESS_MESSAGE,
  CARD_INFO_RULES,
  INPUT_KEY_TABLE,
} from "./constants.js";

import {
  isInValidCardNumber,
  isInValidExpireDate,
  isInValidHolderName,
  isInvalidSecurityCode,
  isInvalidPassword,
} from "./validator";
import useInput from "./components/Hooks/useInput.jsx";

function App() {
  const inputRef = useRef({
    cardNumbers: [],
    passwordNumbers: [],
  });
  const [cardNumber, handleCardNumberUpdate] = useInput(
    ["", "", "", ""],
    isInValidCardNumber,
    inputRef
  );
  const [password, handlePasswordUpdate] = useInput(
    ["", ""],
    isInvalidPassword,
    inputRef
  );
  const [expireDate, handleExpireDateUpdate] = useInput(
    ["", ""],
    isInValidExpireDate
  );
  const [holderName, handleHolderNameUpdate] = useInput(
    "",
    isInValidHolderName
  );
  const [securityCode, handleSecurityCodeUpdate] = useInput(
    "",
    isInvalidSecurityCode
  );
  const [canProceed, setCanProceed] = useState(false);

  const focusBeforeElement = (event, inputKeys) => {
    const { target, key } = event;
    const targetIndex = INPUT_KEY_TABLE[inputKeys].findIndex(
      (inputKey) => inputKey === target.name
    );

    if (key === "Backspace" && target.value.length === 0) {
      inputRef.current[inputKeys][targetIndex - 1]?.focus();
    }
  };

  const handleCardInfoSubmit = () => {
    alert(CARD_REGISTER_SUCCESS_MESSAGE);
  };

  const isValidCardInfo = useCallback(() => {
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

  useEffect(() => {
    if (isValidCardInfo()) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
  }, [isValidCardInfo]);

  return (
    <div className="App">
      <GlobalStyle />
      <PageHeader />
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
        canProceed={canProceed}
      />
      <CardInfoForm autoComplete="off">
        <CardNumberInput
          cardNumber={cardNumber}
          onChange={handleCardNumberUpdate}
          onKeyDown={(event) => focusBeforeElement(event, "cardNumbers")}
          ref={inputRef}
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
          onKeyDown={(event) => focusBeforeElement(event, "passwordNumbers")}
          ref={inputRef}
        />
      </CardInfoForm>
      {canProceed && <Button text="다음" onClick={handleCardInfoSubmit} />}
    </div>
  );
}

export default App;
