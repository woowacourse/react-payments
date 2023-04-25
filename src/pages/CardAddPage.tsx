import Header from '../components/common/Header/Header';
import CardItem from '../components/CardItem/CardItem';
import CardAddForm from '../components/CardAddForm/CardAddForm';
import { useCardAddForm } from '../hooks/useCardAddForm';

function CardAddPage() {
  const {
    cardInformation,
    cardInputValidation,
    onButtonInputChange,
    onSingleInputChange,
    onMultipleInputChange,
    handleSubmit,
  } = useCardAddForm();

  return (
    <>
      <Header content="카드 추가" isOverlayPage={true} />
      <main>
        <CardItem
          className="mg-b-24 center-hoz-item"
          information={{
            issuer: cardInformation.issuer,
            cardNumber: cardInformation.cardNumber,
            expirationDate: cardInformation.expirationDate,
            ownerName: cardInformation.ownerName,
          }}
        />
        <CardAddForm
          cardInformation={cardInformation}
          cardInputValidation={cardInputValidation}
          onButtonInputChange={onButtonInputChange}
          onSingleInputChange={onSingleInputChange}
          onMultipleInputChange={onMultipleInputChange}
          handleSubmit={handleSubmit}
        />
      </main>
    </>
  );
}

export default CardAddPage;
