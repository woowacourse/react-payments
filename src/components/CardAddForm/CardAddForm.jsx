import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import CardNumbersInput from "./CardNumbersInput";
import ExpirationDateInput from "./ExpirationDateInput";
import OwnerNameInput from "./OwnerNameInput";
import SecurityCodeInput from "./SecurityCodeInput";
import CardPasswordInput from "./CardPasswordInput";
import { CARD_INFO, checkValidation, replaceValue } from "../../utils";

const initialValidation = {
  [CARD_INFO.CARD_NUMBERS]: true,
  [CARD_INFO.EXPIRATION_MONTH]: true,
  [CARD_INFO.EXPIRATION_YEAR]: true,
  [CARD_INFO.OWNER_NAME]: true,
  [CARD_INFO.SECURITY_CODE]: true,
  [CARD_INFO.CARD_PASSWORDS]: true,
};

const CardAddForm = ({ cardInfo, setCardInfo }) => {
  const [validation, setValidation] = useState(initialValidation);
  const [backgroundColor] = useState(null);
  const [bank] = useState(null);

  const handleInputChange = event => {
    try {
      const { name, value } = event.target;
      const targetIndex = Number(event.target.dataset.index);
      const replacedValue = replaceValue(name, value);
      const newValue = !Number.isNaN(targetIndex)
        ? cardInfo[name].map((prevValue, index) => (index === targetIndex ? replacedValue : prevValue))
        : replacedValue;

      setCardInfo({ ...cardInfo, [name]: newValue });
      checkValidation(name, newValue);
      setValidation({ ...validation, [name]: true });
    } catch (error) {
      if (error.type === "validation") {
        setValidation({ ...validation, [error.message]: false });

        return;
      }

      console.error(error.message);
    }
  };

  return (
    <>
      <form className="w-full h-160 flex flex-col justify-center">
        <div>
          <div className="w-full flex justify-center mb-4">
            <Card
              backgroundColor={backgroundColor}
              bank={bank}
              numbers={cardInfo.cardNumbers}
              expirationDate={cardInfo.expirationDate}
              ownerName={cardInfo.ownerName}
              isRegistered={false}
            />
          </div>
          <div className="flex flex-col w-full mb-2">
            <CardNumbersInput
              cardNumbers={cardInfo.cardNumbers}
              isValid={validation.cardNumbers}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col mb-2">
            <ExpirationDateInput
              expirationMonth={cardInfo.expirationMonth}
              expirationYear={cardInfo.expirationYear}
              isValid={validation.expirationMonth && validation.expirationYear}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-full mb-2">
            <OwnerNameInput
              ownerName={cardInfo.ownerName}
              isValid={validation.ownerName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-full mb-2">
            <SecurityCodeInput
              securityCode={cardInfo.securityCode}
              isValid={validation.securityCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <CardPasswordInput
              cardPasswords={cardInfo.cardPasswords}
              isValid={validation.cardPasswords}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-end items-center w-full h-10">
        <Button name="다음" />
      </div>
    </>
  );
};

export default CardAddForm;
