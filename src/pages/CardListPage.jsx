import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "contexts/CardContext";

import { FlexWrapper } from "components/common/styled";
import { Card, Button, PageTitle } from "components/common";

export const CardListPage = () => {
  const navigate = useNavigate();
  const cards = useContext(CardContext);

  return (
    <>
      {cards.list && (
        <>
          <PageTitle>보유카드</PageTitle>
          <FlexWrapper
            height="calc(100vh - 45px)"
            flexDirection="column"
            justifyContent="flex-start"
          >
            {cards.list.map((_, i) => (
              <Button key={cards.list[i].id} textAlign="center">
                <Card
                  cardType={cards.list[i].cardType}
                  cardNumbers={cards.list[i].cardNumbers}
                  expireDate={cards.list[i].expireDate}
                  ownerName={cards.list[i].ownerName}
                />
              </Button>
            ))}
          </FlexWrapper>
        </>
      )}
    </>
  );
};
