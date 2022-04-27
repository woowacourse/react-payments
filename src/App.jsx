import CardHolderNameInput from "./CardHolderNameInput.jsx";
import CardNumberInput from "./CardNumberInput.jsx";
import CardPasswordInput from "./CardPasswordInput.jsx";
import CardSecurityCodeInput from "./CardSecurityCodeInput.jsx";
import CardExpireDateInput from "./CardExpireDateInput.jsx";
import { useState } from "react";
import CardPreview from "./CardPreview.jsx";

function App() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [holderName, setHolderName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState(["", ""]);

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

  return (
    <div className="App">
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
      />
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
      <CardPasswordInput password={password} onChange={handlePasswordUpdate} />
    </div>
  );
}

export default App;
