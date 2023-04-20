import CardList from "./CardList/CardList";
import "./cardListPage.css";

export default function CardListPage() {
  return (
    <section className="card-list-section">
      <div className="card-list-section-header">
        <span className="page-explanation">보유 카드</span>
      </div>
      <CardList cardList={mockCardData} />
    </section>
  );
}

interface CreditCard {
  name?: string;
  date?: string;
  bank?: string;
  number?: number[];
  securityCode?: number;
  password?: number;
}

const mockCardData: CreditCard[] = [];
