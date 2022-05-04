import React from 'react';
import styled from 'styled-components';
import Card from '../../Card';
import PlusCard from '../../Card/PlusCard';
import Label from '../../Label';

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

const CardListPage = () => {
  return (
    <Container>
      <Title>보유 카드</Title>
      <CardListContainer>
        <CardItemWrapper>
          <Card
            name={'샐리'}
            expiredMonth={'12'}
            expiredYear={'23'}
            cardNumbers={['1111', '2222', '3333', '4444']}
            cardInfo={{ color: 'red', name: '포코 카드' }}
            size={'small'}
          />
          <Label description="카드 닉네임" />
        </CardItemWrapper>
        <CardItemWrapper>
          <Card
            name={'샐리'}
            expiredMonth={'12'}
            expiredYear={'23'}
            cardNumbers={['1111', '2222', '3333', '4444']}
            cardInfo={{ color: 'red', name: '포코 카드' }}
            size={'small'}
          />
          <Label description="카드 닉네임" />
        </CardItemWrapper>
      </CardListContainer>
      <PlusCardWrapper>
        <PlusCard />
      </PlusCardWrapper>
    </Container>
  );
};

export default CardListPage;
