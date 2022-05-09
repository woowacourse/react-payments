import React, { useContext } from 'react';

import CardListItem from './CardListItem';
import Header from '../common/Header';
import AddCardItem from './AddCardItem';
import { CardList } from './style';

import { CardListContext } from '../context/CardListProvider';

function CardListPage() {
  const cardList = useContext(CardListContext);

  return (
    <>
      <Header>보유 카드</Header>
      <CardList>
        {!!cardList.length &&
          cardList.map(({ id, cardCompany, cardNumbers, owner, cardDate, nickname }) => (
            <CardListItem
              key={id}
              cardCompany={cardCompany}
              cardNumbers={cardNumbers}
              owner={owner}
              cardDate={cardDate}
              nickname={nickname}
            />
          ))}
        <AddCardItem />
      </CardList>
    </>
  );
}

export default CardListPage;
