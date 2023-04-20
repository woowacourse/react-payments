import React from "react";
import St from "./CardOwnerNameInputStyled";

type CardOwnerNameInputProps = {
  changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardOwnerName: string;
};

function CardOwnerNameInput({
  changeCardOwnerName,
  cardOwnerName,
}: CardOwnerNameInputProps) {
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
          onInput={changeCardOwnerName}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        ></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardOwnerNameInput;
