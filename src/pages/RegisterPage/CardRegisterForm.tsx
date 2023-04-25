import styled from "styled-components";
import { useState } from "react";
import CardNumberInput from "./FormInputs/CardNumberInput";
import ExpirationDateInput from "./FormInputs/ExpirationDateInput";
import NameInput from "./FormInputs/NameInput";
import PasswordInput from "./FormInputs/PasswordInput";
import SecurityCodeInput from "./FormInputs/SecurityCodeInput";
import CardPreview from "components/CardPreview";
import { isValidInfo } from "validation";
import Header from "components/Header";
import useSetFormData from "hooks/useSetFormData";
import { NextButton } from "components/ButtonStyle";

const CardRegisterForm = () => {
  const [cardNumber, setCardNumber] = useState({
    number1: "",
    number2: "",
    number3: "",
    number4: "",
  });

  const [date, setDate] = useState({
    month: "",
    year: "",
  });

  const [name, setName] = useState("");

  const cardInfo = { ...cardNumber, ...date, name };

  const { handleFormData } = useSetFormData(isValidInfo, "card");

  return (
    <S.Wrapper>
      <Header navigator title="카드 추가" />

      <CardPreview cardInfo={cardInfo} />

      <form onSubmit={handleFormData}>
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
        <ExpirationDateInput date={date} setDate={setDate} />
        <NameInput name={name} setName={setName} />
        <SecurityCodeInput />
        <PasswordInput />

        <NextButton>다음</NextButton>
      </form>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 480px;
    width: 88%;
  `,
};

export default CardRegisterForm;
