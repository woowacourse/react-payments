import AddCardButton from '../components/AddCardButton/AddCardButton';
import Card from '../components/Card/Card';
import { CardType } from '../types/Card';

const Home = ({ cards }: { cards: CardType[] }) => {
  return (
    <>
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
    </>
  );
};

export default Home;
