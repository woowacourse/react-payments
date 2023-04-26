import React, { useMemo } from "react";
import Layout from "src/components/@common/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useCardList from "src/hooks/useCardList";
import Card from "src/components/@common/Card";

function CardList() {
  const navigation = useNavigate();
  const { cardList } = useCardList({ key: "card-list" });

  const cardLists = useMemo(() => {
    return cardList.length ? (
      cardList.map((card) => {
        const { cardNumbers, ownerName, expireDate, cardName, nickName } = card;
        return (
          <>
            <Card
              key={cardNumbers + expireDate}
              cardName={cardName}
              cardNumber={cardNumbers}
              ownerName={ownerName}
              expireDate={expireDate}
            />
            <CardNickNameSpan>{nickName && nickName}</CardNickNameSpan>
          </>
        );
      })
    ) : (
      <CardRegisterParagarph>새로운 카드를 등록해주세요.</CardRegisterParagarph>
    );
  }, [cardList]);

  return (
    <Layout>
      <CardListSection>
        {cardLists}
        <AddButton
          isFirst={cardList.length ? false : true}
          onClick={() => {
            navigation("/card-register");
          }}
        >
          +
        </AddButton>
      </CardListSection>
    </Layout>
  );
}

export default CardList;

const CardListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardRegisterParagarph = styled.p`
  margin-bottom: 9px;
`;

const CardNickNameSpan = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #575757;
`;

const AddButton = styled.button<{ isFirst: boolean }>`
  width: 208px;
  height: 123px;

  background: #e5e5e5;
  border-radius: 5px;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;

  margin: ${(props) => (props.isFirst ? "" : "25px auto")};
`;
