import styled from 'styled-components';
import AddCardButton from '../components/AddCardButton/AddCardButton';
import Card from '../components/Card/Card';
import { CardType } from '../types/Card';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

const Home = ({ cards }: { cards: CardType[] }) => {
  return (
    <>
      <Wrapper>
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
    </>
  );
};

export default Home;
