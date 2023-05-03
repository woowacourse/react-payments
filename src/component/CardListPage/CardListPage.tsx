import CardList from "./CardList/CardList";

import { CreditCard } from "../../type";

import "./cardListPage.css";

interface CardListPageProps {
  cardList: CreditCard[];
}

export default function CardListPage(props: CardListPageProps) {
  const { cardList } = props;

  return (
    <section className="card-list-section">
      <div className="card-list-section-header">
        <span className="page-explanation">보유 카드</span>
      </div>
      <CardList cardList={cardList} />
    </section>
  );
}
