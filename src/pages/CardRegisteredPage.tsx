import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../types';
import CardItem from '../components/CardItem/CardItem';
import CardRegisterForm from '../components/CardRegisterForm/CardRegisterForm';

function CardRegisteredPage() {
  const location = useLocation();
  const [cardInformation, setCardInformation] = useState<Card | null>(null);

  useEffect(() => {
    setCardInformation(location.state);
  }, [location]);

  return (
    <main>
      {cardInformation && (
        <div className="register-content">
          <h2 className="align-center mg-b-24">카드 등록이 완료되었습니다</h2>
          <CardItem
            className="center-hoz-item"
            information={{
              issuer: cardInformation.issuer,
              cardNumber: cardInformation.cardNumber,
              expirationDate: cardInformation.expirationDate,
              ownerName: cardInformation.ownerName,
            }}
          />
          <CardRegisterForm id={cardInformation.id} defaultCardName={cardInformation.cardName} />
        </div>
      )}
    </main>
  );
}

export default CardRegisteredPage;
