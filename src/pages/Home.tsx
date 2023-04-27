import styled from 'styled-components';
import AddCardButton from '../components/AddCardButton/AddCardButton';
import Card from '../components/Card/Card';
import CardType from '../types/Card';
import Header from '../components/Header/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

const EmptyCardText = styled.p`
  color: #575757;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Home = ({ cards }: { cards: CardType[] }) => {
  return (
    <>
      <Header page="home" titleContent="보유 카드" />
      <Wrapper>
        {cards.length === 0 && (
          <EmptyCardText>새로운 카드를 등록해주세요.</EmptyCardText>
        )}
        {cards.map(
          ({ id, cardNumbers, expiredDates, cardOwnerName }: CardType) => (
            <Card
              key={id}
              cardNumbers={cardNumbers}
              expiredDates={expiredDates}
              cardOwnerName={cardOwnerName}
            />
          )
        )}
        <AddCardButton></AddCardButton>
      </Wrapper>
    </>
  );
};

export default Home;
