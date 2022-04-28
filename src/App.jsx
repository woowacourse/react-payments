import { useCallback, useEffect, useState } from "react";

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

function App() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [holderName, setHolderName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState(["", ""]);
  const [canProceed, setCanProceed] = useState(false);

  const handleCardNumberUpdate = ({ target: { value } }, order) => {
    if (!Number.isInteger(Number(value)) || value.length > 4) return;

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
    if (!/^[a-z]*$/i.test(value) || value.length > 30) return;

    setHolderName(value.toUpperCase());
  };

  const handleSecurityCodeUpdate = ({ target: { value } }) => {
    if (!Number.isInteger(Number(value)) || value.length > 3) return;

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
    alert("카드가 정상적으로 등록되었습니다!");
  };

  const isValidCardInfo = useCallback(() => {
    return (
      cardNumber.join("").length === 16 &&
      expireDate.join("").length === 4 &&
      securityCode.length === 3 &&
      password.join("").length === 2
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
      </CardInfoForm>
      {canProceed && <Button text="다음" onClick={handleCardInfoSubmit} />}
    </div>
  );
}

export default App;
