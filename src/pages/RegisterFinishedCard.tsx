import React from "react";
import Card from "src/components/@common/Card";
import useNavigateCardInfoStep from "src/hooks/useNavigateCardInfoStep";
import { Styled as S } from "src/pages/CardNickName/CardNickName.styles";
import styled from "styled-components";

function RegisterFinishedCard() {
  const {
    cardName,
    cardNumbers,
    ownerName,
    expireDate,
    nickName,
    moveCardList,
  } = useNavigateCardInfoStep();
  return (
    <S.NickNameContainer>
      <S.Title>카드 등록이 완료됐습니다</S.Title>
      <Card
        cardName={cardName}
        cardNumber={cardNumbers}
        ownerName={ownerName}
        expireDate={expireDate}
      />
      <NickNameParagraph>{nickName}</NickNameParagraph>
      <S.ButtonContainer>
        <S.NextButton onClick={moveCardList}>확인</S.NextButton>
      </S.ButtonContainer>
    </S.NickNameContainer>
  );
}

export default RegisterFinishedCard;

const NickNameParagraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #383838;
`;
