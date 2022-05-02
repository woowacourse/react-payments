import "./index.scss";

import Card from "../../components/Card";
import CardNumberInput from "../../components/CardNumberInput";
import CardPasswordInput from "../../components/CardPasswordInput";
import ExpiredDateInput from "../../components/ExpiredDateInput";
import OwnerNameInput from "../../components/OwnerNameInput";
import SecureCodeInput from "../../components/SecureCodeInput";
import useCard from "../../hooks/useCard";
import NextButton from "../../components/NextButton";
import ColorPicker from "../../components/ColorPicker";
import { useState } from "react";

const CardAdd = () => {
  const [cardInfo, dispatch] = useCard();
  const [visible, setVisible] = useState(false);
  const { cardNumber, expiredDate, ownerName, secureCode, password } = cardInfo;

  return (
    <>
      <div className="card-add">
        <header>
          <button>{"<"}</button>
          <p>카드 추가</p>
        </header>
        <div className="card-add__container">
          <Card state={cardInfo} setVisible={setVisible} />
          <form>
            <CardNumberInput state={cardNumber} updateForm={dispatch} />
            <ExpiredDateInput state={expiredDate} updateForm={dispatch} />
            <OwnerNameInput state={ownerName} updateForm={dispatch} />
            <SecureCodeInput state={secureCode} updateForm={dispatch} />
            <CardPasswordInput state={password} updateForm={dispatch} />
          </form>
        </div>
        <NextButton state={cardInfo} />
      </div>
      <ColorPicker
        visible={visible}
        setVisible={setVisible}
        updateForm={dispatch}
      />
    </>
  );
};
export default CardAdd;
