import CardItem from "../components/CardItem/CardItem";
import CardNameChangeForm from "../components/CardNameChangeForm/CardNameChangeForm";
import { useCardListContext } from "../contexts/CardListContext";

const CardRegisteredPage = () => {
  const { newestCard } = useCardListContext();

  return (
    <main>
      {newestCard && (
        <div className="register-content">
          <h2 className="align-center mg-b-24">카드 등록이 완료되었습니다</h2>
          <CardItem
            className="center-hoz-item"
            issuer={newestCard.issuer}
            cardNumber={newestCard.cardNumber}
            expirationDate={newestCard.expirationDate}
            ownerName={newestCard.ownerName}
          />
          <CardNameChangeForm
            id={newestCard.id}
            defaultCardName={newestCard.cardName}
          />
        </div>
      )}
    </main>
  );
};

export default CardRegisteredPage;
