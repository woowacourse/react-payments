import CardList from "./CardList/CardList";
import Header from "../common/Header/Header";
import { useCardListContext } from "../../context/CardListContext";
import "./cardListPage.css";

export default function CardListPage() {
  const { cardList } = useCardListContext();

  return (
    <section className="card-list-section">
      <Header>보유 카드</Header>
      <CardList cardList={cardList} />
    </section>
  );
}
