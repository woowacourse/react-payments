import styled from "styled-components";
import { FormEvent, useState } from "react";
import CardNumberInput from "./FormInputs/CardNumberInput";
import ExpirationDateInput from "./FormInputs/ExpirationDateInput";
import NameInput from "./FormInputs/NameInput";
import PasswordInput from "./FormInputs/PasswordInput";
import SecurityCodeInput from "./FormInputs/SecurityCodeInput";
import CardPreview from "components/CardPreview";
import { getFormData } from "utils/formDataGetter";
import { areValidInfo } from "validation";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const CardRegisterForm = () => {
  const navigate = useNavigate();

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

  const handleForm = (event: FormEvent) => {
    event.preventDefault();

    const formData = getFormData(event.target);
    if (!formData) return;
    const formDataObject = Object.fromEntries(formData);

    if (areValidInfo(formDataObject)) {
      const registeredCards = Object.keys(localStorage).filter((key) =>
        key.startsWith("card")
      );

      localStorage.setItem(
        `card${registeredCards.length}`,
        JSON.stringify(formDataObject)
      );

      navigate("/");
    } else {
      alert("값을 모두 입력해 주세요.");
    }
  };

  return (
    <div>
      <Header navigator={true} title="카드 추가" />

      <CardPreview cardInfo={cardInfo} />

      <form onSubmit={handleForm}>
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
        <ExpirationDateInput date={date} setDate={setDate} />
        <NameInput name={name} setName={setName} />
        <SecurityCodeInput />
        <PasswordInput />

        <S.Button>다음</S.Button>
      </form>
    </div>
  );
};

const S = {
  Button: styled.button`
    display: flex;
    margin: 38px 0 30px auto;
    padding: 10px 16px;
    color: var(--darken-color);
    border: 1px solid var(--darken-color);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    background: none;
    cursor: pointer;
  `,
};

export default CardRegisterForm;
