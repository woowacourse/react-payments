import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "contexts/CardContext";
import styled from "styled-components";

import { FlexWrapper } from "components/common/styled";
import { Card, Button, PageTitle } from "components/common";
import { NewCard } from "components/common/NewCard";

export const CardListPage = () => {
  const navigate = useNavigate();
  const cards = useContext(CardContext);

  return (
    <>
      {cards.list && (
        <>
          <PageTitle>보유카드</PageTitle>
          <FlexWrapper
            height="calc(100vh - 50px)"
            flexDirection="column"
            justifyContent="flex-start"
          >
            {cards.list.map((_, i) => (
              <Button
                onClick={() => navigate(`/cardEdit/${cards.list[i].id}`)}
                textAlign="center"
                key={cards.list[i].id}
              >
                <Card
                  cardType={cards.list[i].cardType}
                  cardNumbers={cards.list[i].cardNumbers}
                  expireDate={cards.list[i].expireDate}
                  ownerName={cards.list[i].ownerName}
                />
                <CardNickname>{cards.list[i].cardNickname}</CardNickname>
              </Button>
            ))}
            <Button
              onClick={() => navigate("/RegisterCard")}
              textAlign="center"
            >
              <NewCard></NewCard>
            </Button>
          </FlexWrapper>
        </>
      )}
    </>
  );
};

const CardNickname = styled.div`
  color: #575757;
  font-weight: bold;
  margin-bottom: 15px;
`;
