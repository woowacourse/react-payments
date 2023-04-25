import styled from "styled-components";
import { useState } from "react";
import CardNumberInput from "./FormInputs/CardNumberInput";
import ExpirationDateInput from "./FormInputs/ExpirationDateInput";
import NameInput from "./FormInputs/NameInput";
import PasswordInput from "./FormInputs/PasswordInput";
import SecurityCodeInput from "./FormInputs/SecurityCodeInput";
import CardPreview from "components/CardPreview";
import Header from "components/Header";
import { NextButton } from "components/ButtonStyle";
import useSetFormData from "hooks/useSetFormData";
import useFormState from "hooks/useFormState";

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

  const [code, setCode] = useState("");

  const [password, setPassword] = useState({ password1: "", password2: "" });

  const PreviewCardInfo = { ...cardNumber, ...date, name };
  const requiredCardInfo = { ...cardNumber, ...date, code, ...password };

  const { isFormFilled } = useFormState(requiredCardInfo);
  const { handleFormData } = useSetFormData("card");

  return (
    <S.Wrapper>
      <Header navigator title="카드 추가" />

      <CardPreview cardInfo={PreviewCardInfo} />

      <form onSubmit={handleFormData}>
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
        <ExpirationDateInput date={date} setDate={setDate} />
        <NameInput name={name} setName={setName} />
        <SecurityCodeInput code={code} setCode={setCode} />
        <PasswordInput password={password} setPassword={setPassword} />

        {isFormFilled && <NextButton>다음</NextButton>}
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
