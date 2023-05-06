import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "src/components/@common/Card";
import { CardInfoContext } from "src/context/CardInfoContext";
import { Styled as S } from "src/pages/CardNickName/CardNickName.styles";
import { PATHS } from "src/utils/constant";

function RegisterFinishedCard() {
  const [cardInfo, dispatch] = useContext(CardInfoContext);
  const { cardName, cardNumbers, ownerName, expireDate } = cardInfo;
  const navigation = useNavigate();

  return (
    <S.NickNameContainer>
      <S.Title>카드 등록이 완료됐습니다</S.Title>
      <Card
        cardName={cardName}
        cardNumber={cardNumbers}
        ownerName={ownerName}
        expireDate={expireDate}
      />
      <S.ButtonContainer>
        <S.NextButton
          onClick={() => {
            if (dispatch) dispatch({ type: "clear", payload: "" });
            navigation(PATHS.cardList);
          }}
        >
          확인
        </S.NextButton>
      </S.ButtonContainer>
    </S.NickNameContainer>
  );
}

export default RegisterFinishedCard;
