import React, { useState } from "react";
import Card from "../Card/Card";
import Input from "../Input/Input";
import InputTitle from "../InputTitle/InputTitle";
import Button from "../Button/Button";
import CardNumbersInput from "./CardNumbersInput";
import ExpirationDateInput from "./ExpirationDateInput";
import OwnerNameInput from "./OwnerNameInput";
import { CARD_INFO, checkValidation, replaceValue } from "../../utils";
import SecurityCodeInput from "./SecurityCodeInput";

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
  const [password] = useState([]);

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
            <div className="mb-2 h-6">
              <InputTitle innerText="카드 비밀번호" />
            </div>
            <div className="flex items-center justify-between w-48">
              <label className="sr-only" htmlFor="card-password-input-1"></label>
              <Input type="password" className="w-10" minLength="1" maxLength="1" value={password[0]} />
              <label className="sr-only" htmlFor="card-password-input-2"></label>
              <Input type="password" className="w-10" minLength="1" maxLength="1" value={password[1]} />
              <div className="w-10 flex justify-center">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#04C09E" />
                </svg>
              </div>
              <div className="w-10 flex justify-center">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#04C09E" />
                </svg>
              </div>
            </div>
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
