import styled from 'styled-components';
import Header from '../common/Header';
import Title from '../common/Title';
import AddCardButton from '../CardListPageComponents/AddCardButton';
import CardItem from '../common/CardItem';
import { Card } from '../../types/Card';

const CardListPage = () => {
  const card: Card = {
    cardNumber: {
      first: 1234,
      second: 2345,
      third: 3456,
      fourth: 4567,
    },
    expirationDate: {
      month: 4,
      year: 25,
    },
    name: 'SUN',
    securityCode: 123,
    password: 12,
  };
  return (
    <div>
      <Header title='보유카드' />
      <ContentContainer>
        <Title title='새로운 카드를 등록해주세요.' />
        <AddCardButton />
        <CardItem card={card} />
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
