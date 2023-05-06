import React from "react";
import Card from "src/components/@common/Card";
import Input from "src/components/@common/Input";
import useSaveNickName from "src/hooks/useSaveNickName";
import { Styled as S } from "./CardNickName.styles";

function CardNickName() {
  const {
    cardName,
    cardNumbers,
    ownerName,
    expireDate,
    nickName,
    onChange,
    registerCard,
  } = useSaveNickName();

  return (
    <S.NickNameContainer>
      <S.Title>카드 이름을 등록해주세요</S.Title>
      <Card
        cardName={cardName}
        cardNumber={cardNumbers}
        ownerName={ownerName}
        expireDate={expireDate}
      />
      <Input
        type="text"
        value={nickName}
        onChange={onChange}
        customInputStyle={S.NickNameInput}
      />
      <S.ButtonContainer>
        <S.NextButton onClick={registerCard}>확인</S.NextButton>
      </S.ButtonContainer>
    </S.NickNameContainer>
  );
}

export default CardNickName;
