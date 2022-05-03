import "./index.scss";

import Card from "../../components/Card";
import CardNumberInput from "../../components/CardNumberInput";
import CardPasswordInput from "../../components/CardPasswordInput";
import ExpiredDateInput from "../../components/ExpiredDateInput";
import OwnerNameInput from "../../components/OwnerNameInput";
import SecureCodeInput from "../../components/SecureCodeInput";
import useCard from "../../hooks/useCard";
import NextButton from "../../components/NextButton";
import CardColorPicker from "../../components/CardColorPicker";
import { useState } from "react";

const CardAdd = () => {
  const { cardInfo, dispatch, validateCardInfo } = useCard();
  const [visible, setVisible] = useState(false);
  const { cardNumber, expiredDate, ownerName, secureCode, password } = cardInfo;

  const submitCard = () => {
    try {
      validateCardInfo();
      if (
        window.confirm(`입력하신 카드정보가
      카드번호:${cardNumber.join("-")}
      카드 만료일:${expiredDate.join("/")}
      카드 소유자 이름:${ownerName === "" ? "임꺽정" : ownerName} 이
      맞습니까`)
      ) {
        alert("카드가 등록되었습니다");
      }
    } catch (e) {
      alert(e.message);
    }
  };
  const closeModal = () => {
    setVisible(false);
  };

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
        <NextButton onClick={submitCard}>다음</NextButton>
      </div>
      {visible && (
        <CardColorPicker closeModal={closeModal} updateForm={dispatch} />
      )}
    </>
  );
};
export default CardAdd;
