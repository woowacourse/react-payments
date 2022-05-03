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
  const { cardName, cardNumber, expiredDate, ownerName, secureCode, password } =
    cardInfo;

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

  const openModal = () => {
    setVisible(true);
  };

  return (
    <>
      <div className="card-add">
        <header>
          <button>{"<"}</button>
          <p>카드 추가</p>
        </header>
        <div className="card-add__container">
          <Card cardInfo={cardInfo} onClick={openModal} />
          {cardName ? (
            <></>
          ) : (
            <span className="select-card-message">
              카드를 눌러 카드를 선택해주세요
            </span>
          )}
          <form>
            <CardNumberInput
              cardNumberValue={cardNumber}
              onChangeCardNumber={dispatch}
            />
            <ExpiredDateInput
              expiredDateValue={expiredDate}
              onChangeExpiredDate={dispatch}
            />
            <OwnerNameInput
              ownerNameValue={ownerName}
              onChangeOwner={dispatch}
            />
            <SecureCodeInput
              secureCodeValue={secureCode}
              onChangeSecureCode={dispatch}
            />
            <CardPasswordInput
              passwordValue={password}
              onChangePassword={dispatch}
            />
          </form>
        </div>
        <NextButton onClick={submitCard}>다음</NextButton>
      </div>
      {visible && (
        <CardColorPicker closeModal={closeModal} onChangeCardName={dispatch} />
      )}
    </>
  );
};
export default CardAdd;
