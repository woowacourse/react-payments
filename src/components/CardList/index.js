import { Card, Header } from '..';
import { CARD_COMPANY } from '../../constants';
import './style.css';

export default function CardList() {
  return (
    <div>
      <Header title="카드 목록"></Header>
      <main className="card-list__container">
        <button type="button" className="card-list__item-button" aria-label="엄카 카드 별칭 수정">
          <Card
            cardCompanyName={CARD_COMPANY.POCO.NAME}
            cardColor={CARD_COMPANY.POCO.COLOR}
            cardNumber="1234123412341234"
            userName="POCO"
            expirationDate="1212"
          />
          <p>엄카</p>
        </button>
        <button type="button" className="card-list__item-button" aria-label="카드 추가">
          <Card />
        </button>
      </main>
    </div>
  );
}
