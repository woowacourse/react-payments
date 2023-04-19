import React, { useState } from "react";
import St from "./styled";
import CardDetailHeader from "./CardDetailHeader";
import CardDetailView from "../CardDetailView";
import CardDetailForm from "./CardDetailForm";

function CardDetailPage() {
  const [CardNumberOrigin, setCardNumberOrigin] = useState("");
  const [CardNumberHidden, setCardNumberHidden] = useState("");

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.target.value.replace(/[^\d•]/g, "").slice(0, 16); // 16자리 이상은 자르기

    //오리진 저장
    if (CardNumberOrigin.length > 8) {
      // 별 표시 출력과 관련된 로직
      if (CardNumberOrigin.length < cardNumber.length) {
        // 추가시
        setCardNumberOrigin(CardNumberOrigin + cardNumber.slice(-1));
      }

      if (CardNumberOrigin.length > cardNumber.length) {
        // 제거시
        setCardNumberOrigin(CardNumberOrigin.slice(0, -1));
      }
    }

    if (CardNumberOrigin.length <= 8) {
      setCardNumberOrigin(cardNumber);
    }

    //히든 저장
    const hiddenNumber =
      cardNumber.length > 8
        ? cardNumber.slice(0, 8) + "•".repeat(cardNumber.length - 8)
        : cardNumber;
    const showNumber = hiddenNumber.match(/.{1,4}/g);

    const resultNumber = showNumber ? showNumber.join("-") : "";

    setCardNumberHidden(resultNumber);
  };

  return (
    <St.Page>
      <CardDetailHeader />
      <CardDetailView />
      <CardDetailForm
        changeCardNumber={changeCardNumber}
        CardNumberHidden={CardNumberHidden}
      />
    </St.Page>
  );
}

export default CardDetailPage;
