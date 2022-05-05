import React from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';

import Header from '../common/Header';
import AddCardItem from './AddCardItem';

const CardList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function CardListPage({ cardList }) {
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
