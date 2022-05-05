import React from 'react';
import styled from 'styled-components';
import CardListItem from '../common/CardListItem';

import Header from '../common/Header';

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
      </CardList>
    </>
  );
}

export default CardListPage;
