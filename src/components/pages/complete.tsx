import Card from "components/add/Card";
import Input from "components/common/Input";
import useCardInfoForm from "hooks/useCardForm";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { InputChangeFunction } from "types";
import { CardInfo, CardInfoWithCardName } from "types/cardInfo";

interface CompleteProps {
  addCard: (cardInfo: CardInfo) => void;
  editCard: (id: number, partialCardInfo: Partial<CardInfo>) => void;
}

export default function Complete({ addCard, editCard }: CompleteProps) {
  const location = useLocation();
  const cardInfo = location.state as CardInfoWithCardName;

  const [cardName, setCardName] = useState(cardInfo?.cardName ?? "");
  const onChangeCardName: InputChangeFunction = e => {
    setCardName(e.target.value);
  };
  const handleSubmit = useCardInfoForm({ ...cardInfo, cardName }, addCard, editCard);

  return (
    <div className="flex-column-center">
      <div className="flex-center">
        <h2 className="complete-message mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card cardInfo={cardInfo} size="big" pointer={false} />
      <form className="card-name-form flex-column-center" onSubmit={handleSubmit}>
        <div className="input-container flex-center w-100">
          <Input
            type="text"
            className="input-underline"
            size="large"
            maxLength={10}
            placeholder="카드의 별칭을 입력해주세요."
            style={{ borderRadius: 0 }}
            onChange={onChangeCardName}
            value={cardName}
          />
        </div>
        <button type="submit" className="submit-button">
          확인
        </button>
      </form>
    </div>
  );
}
