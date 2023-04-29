import { useContext } from "react";
import { CardList } from "../components/cardList";
import { Header } from "../components/common/Header";
import { CardListContext } from "../context/cardListContext";

export const Home = () => {
  const { cards } = useContext(CardListContext);

  return (
    <>
      <Header text="보유카드" />
      <CardList cards={cards} />
    </>
  );
};
