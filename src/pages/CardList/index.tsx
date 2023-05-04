import React, { useMemo } from "react";
import Layout from "src/components/@common/Layout";
import { Styled as S } from "./CardList.styles";
import { useNavigate } from "react-router-dom";
import useCardList from "src/hooks/useCardList";
import Card from "src/components/@common/Card";
import { useModal } from "@hozzijeong/react-modal";
import { PATHS } from "src/utils/constant";

function CardList() {
  const navigation = useNavigate();
  const { cardList } = useCardList({ key: "card-list" });
  const { openModal } = useModal();

  const cardLists = useMemo(() => {
    return cardList.length ? (
      cardList.map((card) => {
        const { cardNumbers, ownerName, expireDate, cardName, nickName } = card;
        return (
          <>
            <Card
              key={cardNumbers + ""}
              cardName={cardName}
              cardNumber={cardNumbers}
              ownerName={ownerName}
              expireDate={expireDate}
            />
            <S.CardNickNameSpan>{nickName && nickName}</S.CardNickNameSpan>
          </>
        );
      })
    ) : (
      <S.CardRegisterParagarph>
        새로운 카드를 등록해주세요.
      </S.CardRegisterParagarph>
    );
  }, [cardList]);

  return (
    <Layout>
      <S.CardListSection>
        {cardLists}
        <S.AddButton
          isFirst={cardList.length ? false : true}
          onClick={() => {
            openModal();
            navigation(PATHS.cardRegister);
          }}
        >
          +
        </S.AddButton>
      </S.CardListSection>
    </Layout>
  );
}

export default CardList;
