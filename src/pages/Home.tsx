import styled from 'styled-components';
import AddCardButton from '../components/AddCardButton/AddCardButton';
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import { CardType } from '../types/Card';

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
    <Layout>
      <Wrapper>
        {cards.length === 0 && (
          <EmptyCardText>새로운 카드를 등록해주세요.</EmptyCardText>
        )}
        {cards.map(
          ({ id, cardNumbers, expiredDate, cardOwnerName }: CardType) => (
            <Card
              key={id}
              cardNumbers={cardNumbers}
              expiredDate={expiredDate}
              cardOwnerName={cardOwnerName}
            />
          )
        )}
        <AddCardButton></AddCardButton>
      </Wrapper>
    </Layout>
  );
};

export default Home;
