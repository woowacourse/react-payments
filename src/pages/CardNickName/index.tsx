import React from "react";
import Card from "src/components/@common/Card";
import Input from "src/components/@common/Input";
import useNavigateCardInfoStep from "src/hooks/useNavigateCardInfoStep";
import { Styled as S } from "./CardNickName.styles";
import useCardInfoInput from "src/hooks/useCardInfoInput";

function CardNickName() {
  const { cardName, cardNumbers, ownerName, expireDate, registerCard } =
    useNavigateCardInfoStep();

  const { value, onChange } = useCardInfoInput<string>({
    contextType: "nickName",
  });

  return (
    <S.NickNameContainer>
      <S.Title>카드 이름을 입력해주세요</S.Title>
      <Card
        cardName={cardName}
        cardNumber={cardNumbers}
        ownerName={ownerName}
        expireDate={expireDate}
      />
      <Input
        type="text"
        value={value}
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
