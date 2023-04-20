import CardList from "./CardList/CardList";
import "./cardListPage.css";

interface CreditCard {
  name?: string;
  date?: string;
  bank?: string;
  number?: number[];
  securityCode?: number;
  password?: number;
}
interface Props {
  cardList: CreditCard[];
}

export default function CardListPage(props: Props) {
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
