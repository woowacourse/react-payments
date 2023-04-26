import { CardList } from "../components/cardList/CardList";
import { Header } from "../components/common/Header";

export const Home = () => {
  return (
    <>
      <Header text="보유카드" />
      <CardList />
    </>
  );
};
