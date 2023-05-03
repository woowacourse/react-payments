import { Navigate, useSearchParams } from 'react-router-dom';
import CardItem from '../components/CardItem/CardItem';
import CardNameChangeForm from '../components/CardNameChangeForm/CardNameChangeForm';
import { useCardListContext } from '../contexts/CardListContext';
import { PATH } from '../constants';

const CardRegisteredPage = () => {
  const [searchParams] = useSearchParams();
  const { getCardById } = useCardListContext();

  const id = searchParams.get('id');
  const card = getCardById(Number(id));

  if (!card) {
    return <Navigate to={PATH.NOT_FOUND} />;
  }

  return (
    <main>
      <div className="register-content">
        <h2 className="align-center mg-b-24">카드 등록이 완료되었습니다</h2>
        <CardItem
          className="center-hoz-item"
          issuer={card.issuer}
          cardNumber={card.cardNumber}
          expirationDate={card.expirationDate}
          ownerName={card.ownerName}
        />
        <CardNameChangeForm id={card.id} defaultCardName={card.cardName} />
      </div>
    </main>
  );
};

export default CardRegisteredPage;
