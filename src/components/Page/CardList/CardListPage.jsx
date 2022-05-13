import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CardListContext } from 'contexts';

import Card from 'components/Card';
import Label from 'components/Label';

const Container = styled.div`
  display: flex;
  width: 375px;
  height: fit-content;
  flex-direction: column;
  padding-bottom: 20px;
`;

const Title = styled.h2`
  margin-left: 40px;
  margin-bottom: 65px;
  font-weight: 500;
  font-size: 16px;
`;
const CardListContainer = styled.div``;

const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 20px;

  & > label {
    margin-top: 5px;
    font-weight: 700;
    font-size: 14px;
  }
`;

const PlusCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PlusCard = styled.button`
  width: 208px;
  height: 130px;
  text-align: center;
  font-size: 30px;
  border-style: none;
  border-radius: 4px;
  &:hover {
    border: 2px solid #94dacd;
    color: #94dacd;
  }
`;

const CardListPage = () => {
  const { cardList } = useContext(CardListContext);

  return (
    <Container>
      <Title>보유 카드</Title>
      <CardListContainer>
        {cardList.map((card) => (
          <CardItemWrapper key={card.id}>
            <Card
              name={card.ownerName}
              expiredMonth={card.expiredDate.expiredMonth}
              expiredYear={card.expiredDate.expiredYear}
              cardNumbers={card.cardNumber}
              cardType={card.cardType}
              size={'small'}
            />
            <Label description={card.nickName} />
          </CardItemWrapper>
        ))}
      </CardListContainer>
      <PlusCardWrapper>
        <Link to="/react-payments/">
          <PlusCard>+</PlusCard>
        </Link>
      </PlusCardWrapper>
    </Container>
  );
};

export default CardListPage;
