import styled from "styled-components";
import { useState, createContext } from "react";
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
import CardCompanyModal from "./CardCompanyModal";
import { SetModalState } from "types";

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

  const [isModalOpen, setIsModalOpen] = useState(true);

  const PreviewCardInfo = { ...cardNumber, ...date, name };
  const requiredCardInfo = { ...cardNumber, ...date, code, ...password };

  const { isFormFilled } = useFormState(requiredCardInfo);
  const { handleFormDataSubmit } = useSetFormData("card");

  return (
    <ModalState.Provider value={setIsModalOpen}>
      <S.Wrapper>
        <Header navigator title="카드 추가" />

        <CardPreview cardInfo={PreviewCardInfo} />

        <form onSubmit={handleFormDataSubmit}>
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

        {isModalOpen && <CardCompanyModal />}
      </S.Wrapper>
    </ModalState.Provider>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 480px;
    width: 88%;
  `,
};

export default CardRegisterForm;

export const ModalState = createContext<SetModalState>(() => {});
