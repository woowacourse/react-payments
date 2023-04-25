import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/pages/CardList/CardContent/CardContent";
import CardCVCInput from "../../components/pages/CardRegister/CardCVCInput/CardCVCInput";
import CardExpirationDateInput from "../../components/pages/CardRegister/CardExpirationDateInput/CardExpirationDateInput";
import CardNameInput from "../../components/pages/CardRegister/CardNameInput/CardNameInput";
import CardNumberInput from "../../components/pages/CardRegister/CardNumberInput/CardNumberInput";
import CardPasswordInput from "../../components/pages/CardRegister/CardPasswordInput/CardPasswordInput";
import { useCardRegisterContext } from "../../context/CardRegisterContext";
import * as Styled from "./CardRegister.styles";
import { getCardList, saveCardList } from "../../utils/localStorage";

export default function CardRegister() {
  const navigate = useNavigate();
  const { cardRegisterInfo, initCardRegisterInfo } = useCardRegisterContext();
  const [allValid, setAllValid] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cardRegisterInfo !== null) {
      const newCardList = [cardRegisterInfo, ...getCardList()];
      saveCardList(newCardList);
      initCardRegisterInfo();
    }

    navigate("/", { state: { isReadyForRegister: true } });
  };

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    const inputs = Array.from(form.elements).filter(
      (e) => e.tagName === "INPUT"
    ) as HTMLInputElement[];

    const activeInput = e.target as HTMLInputElement;
    const activeIndex = inputs.indexOf(activeInput);

    const isNameInput = activeInput.name === "name";
    const isMaxLength = activeInput.value.length === activeInput.maxLength;
    const isEmpty = activeInput.value === "";

    if (isNameInput || !isNameInput) {
      if (isMaxLength) {
        inputs[activeIndex + 1]?.focus();
      } else if (isEmpty) {
        inputs[activeIndex - 1]?.focus();
      }
    }

    const hasInvalidInput = inputs.some((input) => !input.validity.valid);
    setAllValid(!hasInvalidInput);
  };

  return (
    <Styled.Root>
      <Styled.CardSection>
        {cardRegisterInfo && (
          <Card
            cardNumber={cardRegisterInfo.cardNumber}
            expirationDate={cardRegisterInfo.expirationDate}
            holderName={cardRegisterInfo.holderName}
            cvc={cardRegisterInfo.cvc}
            password={cardRegisterInfo.password}
          />
        )}
      </Styled.CardSection>
      <Styled.InfoSection>
        <Styled.RegisterForm onSubmit={handleSubmit} onChange={handleChange}>
          <CardNumberInput />
          <CardExpirationDateInput />
          <CardNameInput />
          <CardCVCInput />
          <CardPasswordInput />
          {allValid && <Styled.CompleteButton>바로</Styled.CompleteButton>}
        </Styled.RegisterForm>
      </Styled.InfoSection>
    </Styled.Root>
  );
}
