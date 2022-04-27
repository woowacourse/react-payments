import "./index.scss";

import Card from "../../components/Card";
import CardNumberInput from "../../components/CardNumberInput";
import CardPasswordInput from "../../components/CardPasswordInput";
import ExpiredDateInput from "../../components/ExpiredDateInput";
import OwnerNameInput from "../../components/OwnerNameInput";
import SecureCodeInput from "../../components/SecureCodeInput";
import { useState } from "react";

const CardAdd = () => {
  const [form, setForm] = useState({
    cardNumber: ["", "", "", ""],
    expiredDate: ["", ""],
    ownerName: "",
    secureCode: "",
    password: ["", ""],
  });

  const { cardNumber, expiredDate, ownerName, secureCode, password } = form;
  const updateCardNumber = (number, index) => {
    setForm({
      ...form,
      cardNumber: [
        ...cardNumber.slice(0, index),
        number,
        ...cardNumber.slice(index + 1),
      ],
    });
  };

  const updateExpiredDate = (number, index) => {
    setForm({
      ...form,
      expiredDate: [
        ...expiredDate.slice(0, index),
        number,
        ...expiredDate.slice(index + 1),
      ],
    });
  };

  const updateOwnerName = (name) => {
    setForm({
      ...form,
      ownerName: name,
    });
  };

  const updateSecureCode = (number) => {
    setForm({
      ...form,
      secureCode: number,
    });
  };

  const updatePassword = (number, index) => {
    setForm({
      ...form,
      password: [
        ...password.slice(0, index),
        number,
        ...password.slice(index + 1),
      ],
    });
  };

  const submit = () => {
    console.log(form);
  };

  return (
    <div className="card-add">
      <header>
        <button>{"<"}</button>
        <p>카드 추가</p>
      </header>
      <div className="card-add__container">
        <Card state={form} />
        <form>
          <CardNumberInput state={cardNumber} updateForm={updateCardNumber} />
          <ExpiredDateInput
            state={expiredDate}
            updateForm={updateExpiredDate}
          />
          <OwnerNameInput state={ownerName} updateForm={updateOwnerName} />
          <SecureCodeInput state={secureCode} updateForm={updateSecureCode} />
          <CardPasswordInput state={password} updateForm={updatePassword} />
        </form>
      </div>
      <div className="next--button">
        <button onClick={submit}>다음</button>
      </div>
    </div>
  );
};

export default CardAdd;
