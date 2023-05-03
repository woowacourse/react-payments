import React from "react";
import St from "./CardOwnerNameInputStyled";
import useCardOwnerName from "hooks/card/useCardOwnerName";

function CardOwnerNameInput() {
  const { cardOwnerName, changeCardOwnerName } = useCardOwnerName();

  return (
    <section>
      <St.Title>
        <div>카드 소유자 이름 (선택)</div>
        <div>{cardOwnerName.length}/30</div>
      </St.Title>
      <St.InputSection>
        <St.Input
          type="text"
          maxLength={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={changeCardOwnerName}
        />
      </St.InputSection>
    </section>
  );
}

export default CardOwnerNameInput;
