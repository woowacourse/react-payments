import { CardList } from "../components/CardList";
import { Header } from "../components/common/Header";
import { CardType } from "../types/card";

interface HomeProps {
  cards: CardType[];
}

export const Home = ({ cards }: HomeProps) => {
  return (
    <>
      <Header text="보유카드" />
      <CardList cards={cards} />
    </>
  );
};
