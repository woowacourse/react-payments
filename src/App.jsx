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
import useValidatedUpdate from "./useValidatedUpdate.jsx";
import useArraySetState from "./useArraySetState.jsx";

const trimStartZeroPad = (value) => {
  return value.length > 1 && value.startsWith("0") ? value.slice(1) : value;
};

const validations = {
  cardNumber: (value) => /^\d{0,4}$/.test(value),
  expireDate: (value, order) => {
    const parsedValue = trimStartZeroPad(value);

    if (order === 0) {
      return /^$|0|(^[1-9]$)|(^1?[0-2]$)/.test(parsedValue);
    }

    return /^\d{0,2}$/.test(parsedValue);
  },
  holderName: (value) => /^[a-z]{0,30}$/i.test(value),
  securityCode: (value) => /^\d{0,3}$/.test(value),
  password: (value) => /^\d{0,1}$/.test(value),
};

function App() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [holderName, setHolderName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState(["", ""]);

  const setCardNumberArray = useArraySetState(setCardNumber);
  const handleCardNumberUpdate = useValidatedUpdate(
    validations["cardNumber"],
    setCardNumberArray
  );

  const setExpireDateArray = useArraySetState(setExpireDate);
  const createDateString = (value) => {
    const parsedValue = trimStartZeroPad(value);
    return parsedValue.length === 1 && Number(parsedValue) !== 0
      ? `0${parsedValue}`
      : parsedValue;
  };
  const handleExpireDateUpdate = useValidatedUpdate(
    validations["expireDate"],
    (value, order) => {
      setExpireDateArray(createDateString(value), order);
    }
  );

  const handleHolderNameUpdate = useValidatedUpdate(
    validations["holderName"],
    (value) => {
      setHolderName(value.toUpperCase());
    }
  );

  const handleSecurityCodeUpdate = useValidatedUpdate(
    validations["securityCode"],
    setSecurityCode
  );

  const setPasswordArray = useArraySetState(setPassword);
  const handlePasswordUpdate = useValidatedUpdate(
    validations["password"],
    setPasswordArray
  );

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
      </CardInfoForm>
      {isValidCardInfo && <Button text="다음" onClick={handleCardInfoSubmit} />}
    </div>
  );
}

export default App;
