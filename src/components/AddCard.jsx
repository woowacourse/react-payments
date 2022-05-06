import React from "react";

import CardPreview from "./UIComponents/CardPreview/CardPreview";
import Button from "./UIComponents/Button/Button";

import useInput from "../Hooks/useInput.jsx";

import {
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardExpireDateInput,
  CardInfoForm,
} from "./AddCard/";
import {
  initialCardNumber,
  initialPassword,
  initialExpireDate,
  initialHolderName,
  initialSecurityCode,
} from "../data/initialData";
import {
  isInValidCardNumber,
  isInValidExpireDate,
  isInValidHolderName,
  isInvalidSecurityCode,
  isInvalidPassword,
  isValidCardInfo,
} from "../validators/validator";

export default function AddCard() {
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
    <>
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
        canProceed={isValidCardInfo(
          cardNumber,
          expireDate,
          securityCode,
          password
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
        {isValidCardInfo(cardNumber, expireDate, securityCode, password) && (
          <Button text="다음" type="submit" />
        )}
      </CardInfoForm>
    </>
  );
}
