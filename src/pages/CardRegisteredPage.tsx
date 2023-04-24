import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../types';
import { PATH } from '../constants';
import CardItem from '../components/CardItem/CardItem';
import Button from '../components/common/Button/Button';
import Input from '../components/common/Input/Input';

function CardRegisteredPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cardInformation, setCardInformation] = useState<Card | null>(null);

  useEffect(() => {
    setCardInformation(location.state);
  }, [location]);

  return (
    <main>
      {cardInformation && (
        <>
          <h2 className="align-center mg-b-24">카드 등록이 완료되었습니다</h2>
          <CardItem
            className="mg-b-24 center-hoz-item"
            information={{
              issuer: cardInformation.issuer,
              cardNumber: cardInformation.cardNumber,
              expirationDate: cardInformation.expirationDate,
              ownerName: cardInformation.ownerName,
            }}
          />
          <Input variant="underline" maxLength={20} />
          <Button
            variant="primary"
            className="complete-button center-hoz-item w-250"
            onClick={() => navigate(PATH.ROOT)}
          >
            완료
          </Button>
        </>
      )}
    </main>
  );
}

export default CardRegisteredPage;
