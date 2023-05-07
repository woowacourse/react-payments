import CardList from "./CardList/CardList";

import { CreditCard } from "../../type";

import "./cardListPage.css";
import { EXPLANATION_MESSAGE } from "../../CONSTANT";

interface CardListPageProps {
  cardList: CreditCard[];
}

export default function CardListPage(props: CardListPageProps) {
  const { cardList } = props;

  return (
    <section className="card-list-section">
      <div className="card-list-section-header">
        <span className="page-explanation">
          {EXPLANATION_MESSAGE.CARD_LIST_PAGE}
        </span>
      </div>
      <CardList cardList={cardList} />
    </section>
  );
}
