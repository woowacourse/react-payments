import { useCallback, useEffect, useState } from "react";

import PageHeader from "./components/common/PageHeader.jsx";
import Button from "./components/common/Button.jsx";

import {
  CardPreview,
  CardInfoForm,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardExpireDateInput,
} from "./components";
import { CARD_REGISTER_SUCCESS_MESSAGE, CARD_INFO_RULES } from "./constants";

function App() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [holderName, setHolderName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState(["", ""]);
  const [canProceed, setCanProceed] = useState(false);

  const handleCardNumberUpdate = ({ target: { value } }, order) => {
    if (
      !Number.isInteger(Number(value)) ||
      value.length > CARD_INFO_RULES.NUMBER_UNIT_LENGTH
    )
      return;

    setCardNumber((prevValue) => {
      const newValue = [...prevValue];
      newValue[order] = value;

      return newValue;
    });
  };

  const handleExpireDateUpdate = ({ target: { value } }, order) => {
    const parsedValue =
      value.startsWith("0") && value.length !== 1 ? value.slice(1) : value;

    if (!/^\d{0,2}$/.test(parsedValue)) return;

    if (
      order === 0 &&
      value !== "0" &&
      value !== "" &&
      (Number(parsedValue) > 12 || Number(parsedValue) < 1)
    ) {
      return;
    }

    setExpireDate((prevValue) => {
      const newValue = [...prevValue];
      newValue[order] =
        parsedValue.length === 1 && Number(parsedValue) !== 0
          ? `0${parsedValue}`
          : parsedValue;

      return newValue;
    });
  };

  const handleHolderNameUpdate = ({ target: { value } }) => {
    if (
      !/^[a-z]*$/i.test(value) ||
      value.length > CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH
    )
      return;

    setHolderName(value.toUpperCase());
  };

  const handleSecurityCodeUpdate = ({ target: { value } }) => {
    if (
      !Number.isInteger(Number(value)) ||
      value.length > CARD_INFO_RULES.SECURITY_CODE_LENGTH
    )
      return;

    setSecurityCode(value);
  };

  const handlePasswordUpdate = ({ target: { value } }, order) => {
    if (!Number.isInteger(Number(value)) || value.length > 1) return;

    setPassword((prevValue) => {
      const newValue = [...prevValue];
      newValue[order] = value;

      return newValue;
    });
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
      {canProceed && <Button text="다음" onClick={handleCardInfoSubmit} />}
    </div>
  );
}

export default App;
