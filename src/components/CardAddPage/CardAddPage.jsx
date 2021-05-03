import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import CardNumbersInput from "./CardNumbersInput";
import ExpirationDateInput from "./ExpirationDateInput";
import OwnerNameInput from "./OwnerNameInput";
import SecurityCodeInput from "./SecurityCodeInput";
import CardPasswordInput from "./CardPasswordInput";
import Dimmer from "../Dimmer/Dimmer";
import BankSelector from "../BankSelector/BankSelector";
import Header from "../Header/Header";
import { LENGTH } from "../../utils";

const CardAddPage = ({ cardInfo, validation, addBank, onInputChange, routeToBack, routeToNext }) => {
  const [isBankSelectorVisible, setBankSelectorVisible] = useState(false);

  const handleBankSelectorVisible = () => {
    setBankSelectorVisible(!isBankSelectorVisible);
  };

  const handleBankClick = (backgroundColor, bank) => {
    addBank(backgroundColor, bank);
    handleBankSelectorVisible();
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    routeToNext();
  };

  return (
    <>
      <Header title={"카드 추가"} hasBackButton={true} onClick={routeToBack} />
      <form className="w-full h-160 flex flex-col justify-center" onSubmit={handleFormSubmit}>
        <div className="w-full flex justify-center mb-4">
          <Card
            backgroundColor={cardInfo.backgroundColor}
            bank={cardInfo.bank}
            numbers={cardInfo.cardNumbers}
            expirationDate={cardInfo.expirationMonth + "/" + cardInfo.expirationYear}
            ownerName={cardInfo.ownerName.slice(0, LENGTH.OWNER_NAME.CARD_DISPLAY)}
            isRegistered={false}
            onClick={handleBankSelectorVisible}
          />
        </div>
        <div>
          <div className="flex flex-col w-full mb-2">
            <CardNumbersInput
              cardNumbers={cardInfo.cardNumbers}
              isValid={validation.cardNumbers ?? true}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col mb-2">
            <ExpirationDateInput
              expirationMonth={cardInfo.expirationMonth}
              expirationYear={cardInfo.expirationYear}
              isValid={(validation.expirationMonth && validation.expirationYear) ?? true}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col w-full mb-2">
            <OwnerNameInput ownerName={cardInfo.ownerName} isValid={validation.ownerName} onChange={onInputChange} />
          </div>
          <div className="flex flex-col w-full mb-2">
            <SecurityCodeInput
              securityCode={cardInfo.securityCode}
              isValid={validation.securityCode ?? true}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <CardPasswordInput
              cardPasswords={cardInfo.cardPasswords}
              isValid={validation.cardPasswords ?? true}
              onChange={onInputChange}
            />
          </div>
        </div>
        {Object.values(validation).every(Boolean) && (
          <div className="flex justify-end items-center w-full h-10">
            <Button name="다음" type="submit" />
          </div>
        )}
      </form>
      {isBankSelectorVisible && (
        <>
          <Dimmer onClick={handleBankSelectorVisible} />
          <BankSelector onClick={handleBankClick} />
        </>
      )}
    </>
  );
};

export default CardAddPage;
