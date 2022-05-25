import React, { useContext } from "react";

import { CardListContext } from "components/context/CardListProvider";

import Header from "components/common/Header";
import CardListItem from "./CardListItem";
import AddCardItem from "./AddCardItem";
import { CardList } from "./style";

function CardListPage() {
  const cardList = useContext(CardListContext);

  return (
    <>
      <Header>보유 카드</Header>
      <CardList>
        {!!cardList.length &&
          cardList.map(
            ({ id, cardCompany, cardNumbers, owner, cardDate, nickname }) => (
              <CardListItem
                key={id}
                cardCompany={cardCompany}
                cardNumbers={cardNumbers}
                owner={owner}
                cardDate={cardDate}
                nickname={nickname}
              />
            )
          )}
        <AddCardItem />
      </CardList>
    </>
  );
}

export default CardListPage;
