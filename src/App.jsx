import { useMemo, useRef } from "react";

import GlobalStyle from "./globalStyles.jsx";

import PageHeader from "./components/PageHeader.jsx";
import CardInfoForm from "./components/CardInfoForm.jsx";
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
} from "./constants/constants.js";
import {
  isInValidCardNumber,
  isInValidExpireDate,
  isInValidHolderName,
  isInvalidSecurityCode,
  isInvalidPassword,
} from "./validators/validator";
import useInput from "./Hooks/useInput.jsx";

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

  const isValidCardNumber = useMemo(
    () =>
      cardNumber.join("").length ===
      CARD_INFO_RULES.NUMBER_UNIT_COUNT * CARD_INFO_RULES.NUMBER_UNIT_LENGTH,
    [cardNumber]
  );

  const isValidExpireDate = useMemo(
    () => expireDate.join("").length === CARD_INFO_RULES.EXPIRE_DATE_LENGTH,
    [expireDate]
  );

  const isValidSecurityCode = useMemo(
    () => securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH,
    [securityCode]
  );

  const isValidPassword = useMemo(
    () => password.join("").length === CARD_INFO_RULES.PASSWORD_LENGTH,
    [password]
  );

  const isValidCardInfo = useMemo(() => {
    return (
      isValidCardNumber &&
      isValidExpireDate &&
      isValidSecurityCode &&
      isValidPassword
    );
  }, [
    isValidCardNumber,
    isValidExpireDate,
    isValidSecurityCode,
    isValidPassword,
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
      {isValidCardInfo && <Button text="다음" onClick={handleCardInfoSubmit} />}
    </div>
  );
}

export default App;
