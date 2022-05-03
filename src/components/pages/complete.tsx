import Card from "components/Card";
import React from "react";
import { useLocation } from "react-router-dom";
import { CardInfo } from "types/cardInfo";

export default function Complete() {
  const location = useLocation();
  const { cardInfo }: { cardInfo?: CardInfo } = location.state;

  return (
    <div className="flex-column-center">
      <div className="flex-center">
        <h2 className="complete-message mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card cardInfo={cardInfo} size="big" />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
        />
      </div>
      <button className="submit-button">확인</button>
    </div>
  );
}
