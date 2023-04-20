import React, { useMemo } from "react";
import Layout from "src/components/@common/Layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useCardList from "src/hooks/useCardList";
import Card from "src/components/@common/Card";

function CardList() {
  const navigation = useNavigate();
  const { cardList } = useCardList({ key: "card-list" });

  const cardLists = useMemo(
    () =>
      cardList.map((card) => {
        const { cardNumbers, ownerName, expireDate } = card;
        return (
          <Card
            key={cardNumbers + expireDate}
            cardNumber={cardNumbers}
            ownerName={ownerName}
            expireDate={expireDate}
          />
        );
      }),
    [cardList],
  );

  return (
    <Layout>
      <CardListSection>
        {cardList.length ? (
          cardLists
        ) : (
          <CardRegisterParagarph>
            새로운 카드를 등록해주세요.
          </CardRegisterParagarph>
        )}
        <AddButton
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

const AddButton = styled.button`
  width: 208px;
  height: 123px;

  background: #e5e5e5;
  border-radius: 5px;
  border: none;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
`;
