import { useContext } from 'react';
import { CardListContext } from '../contexts/CardListContext';
import CardItem from '../components/CardItem/CardItem';
import CardNameChangeForm from '../components/CardNameChangeForm/CardNameChangeForm';

function CardRegisteredPage() {
  const { newCard } = useContext(CardListContext);

  return (
    <main>
      {newCard && (
        <div className="register-content">
          <h2 className="align-center mg-b-24">카드 등록이 완료되었습니다</h2>
          <CardItem
            className="center-hoz-item"
            issuer={newCard.issuer}
            cardNumber={newCard.cardNumber}
            expirationDate={newCard.expirationDate}
            ownerName={newCard.ownerName}
          />
          <CardNameChangeForm id={newCard.id} defaultCardName={newCard.cardName} />
        </div>
      )}
    </main>
  );
}

export default CardRegisteredPage;
