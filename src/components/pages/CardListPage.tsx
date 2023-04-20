import styled from 'styled-components';
import Header from '../common/Header';
import Title from '../common/Title';
import AddCardButton from '../CardListPageComponents/AddCardButton';
import CardList from '../CardListPageComponents/CardList';
import { Card } from '../../types/Card';
import { useState } from 'react';

const cards: Card[] = [
  // {
  //   id: 1,
  //   cardNumber: {
  //     first: '1234',
  //     second: '2345',
  //     third: '3456',
  //     fourth: '4567',
  //   },
  //   expirationDate: {
  //     month: '04',
  //     year: '25',
  //   },
  //   name: 'SUN',
  //   securityCode: '123',
  //   password: '12',
  // },
  // {
  //   id: 2,
  //   cardNumber: {
  //     first: '1234',
  //     second: '2345',
  //     third: '3456',
  //     fourth: '4567',
  //   },
  //   expirationDate: {
  //     month: '04',
  //     year: '25',
  //   },
  //   name: 'SUN',
  //   securityCode: '123',
  //   password: '12',
  // },
  // {
  //   id: 3,
  //   cardNumber: {
  //     first: '1234',
  //     second: '2345',
  //     third: '3456',
  //     fourth: '4567',
  //   },
  //   expirationDate: {
  //     month: '04',
  //     year: '25',
  //   },
  //   name: 'SUN',
  //   securityCode: '123',
  //   password: '12',
  // },
];

const CardListPage = () => {
  const [cardList, setCardList] = useState(cards);

  return (
    <div>
      <Header title='보유카드' />
      <ContentContainer>
        {!cardList.length && <Title title='새로운 카드를 등록해주세요.' />}
        <CardList cardList={cardList} />
        <AddCardButton />
      </ContentContainer>
    </div>
  );
};

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CardListPage;
