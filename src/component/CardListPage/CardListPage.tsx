import CardList from "./CardList/CardList";
import "./cardListPage.css";

import { CreditCard } from "../../type/CreditCard";
import Header from "../common/Header/Header";

interface Props {
  cardList: CreditCard[];
}

export default function CardListPage(props: Props) {
  const { cardList } = props;

  return (
    <section className="card-list-section">
      <Header>보유 카드</Header>
      <CardList cardList={cardList} />
    </section>
  );
}
