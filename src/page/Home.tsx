import { useContext } from "react";
import { CardList } from "../components/cardList";
import { Header } from "../components/common/Header";
import { CardContext } from "../context/cardContext";

export const Home = () => {
  const { cards } = useContext(CardContext);

  return (
    <>
      <Header text="보유카드" />
      <CardList cards={cards} />
    </>
  );
};
