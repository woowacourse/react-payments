import React, { useState } from "react";
import Card from "../stories/Card";
import { CARD, CARD_SIZE } from "../stories/constants/card";
import Input from "../stories/Input";

function CardAddition(props) {
  const [cardType, setCardType] = useState(CARD.UNKNOWN);

  return (
    <>
      <div className="card-addition">
        <Card cardType={cardType} size={CARD_SIZE.MEDIUM} />
        <form className="card-addition__form">
          <div className="card-addition__number-input mt-standard">
            <label for="card-number">카드 번호</label>
            <Input id="card-number" type="text" isCenter={true} />
          </div>

          <div className="card-addition__expiration-input mt-standard">
            <label for="expiration-date">만료일</label>
            <Input
              id="expiration-date"
              type="text"
              isCenter={true}
              placeHolder="MM / YY"
            />
          </div>

          <div className="card-addition__username-input mt-standard">
            <label for="username">카드 소유자 이름(선택)</label>
            <span className="card-addition__username-indicator">0/30</span>
            <Input
              id="username"
              type="text"
              isCenter={true}
              placeHolder="카드에 표시된 이름과 동일하게 입력하세요"
            />
          </div>

          <div className="card-addition__cvc mt-standard">
            <label for="cvc">보안 코드(CVC/CVV)</label>
            <div className="card-addition__cvc-inner">
              <Input id="cvc" type="number" isCenter={true} />
              <div className="card-addition__tool-tip-button">
                <span>?</span>
              </div>
            </div>
          </div>

          <div className="card-addition__password mt-standard">
            <label>카드비밀번호</label>
            <div className="card-addition__password-inner">
              <Input
                type="number"
                isCenter={true}
                option={{
                  "aria-label": "첫번째 비밀번호",
                  min: 0,
                  max: 9,
                  maxlength: 1,
                  required: "required",
                }}
              />
              <Input
                type="number"
                isCenter={true}
                option={{
                  "aria-label": "두번째 비밀번호",
                  min: 0,
                  max: 9,
                  maxlength: 1,
                  required: "required",
                }}
              />
              <div className="card-addition__dot-wrapper">
                <span className="card-addition__dot"></span>
              </div>
              <div className="card-addition__dot-wrapper">
                <span className="card-addition__dot"></span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CardAddition;
