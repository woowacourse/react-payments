import AddCardButton from '../components/AddCardButton/AddCardButton';
import Card from '../components/Card/Card';

interface Card {
  cardNumbers: Record<number, string>;
  expiredDate: Record<number, string>;
  cardOwnerName: string;
}

const Home = ({ cards }: { cards: Card[] }) => {
  console.log(cards);
  return (
    <>
      {cards.map(({ cardNumbers, expiredDate, cardOwnerName }) => (
        <Card
          cardNumbers={cardNumbers}
          expiredDate={expiredDate}
          cardOwnerName={cardOwnerName}
        />
      ))}
      <AddCardButton></AddCardButton>
    </>
  );
};

export default Home;
