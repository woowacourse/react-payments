import { CardList } from "../components/cardList";
import { Header } from "../components/common";

export const Home = () => {
  return (
    <>
      <Header text="보유카드" />
      <CardList />
    </>
  );
};
