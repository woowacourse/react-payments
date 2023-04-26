import Header from '../components/common/Header/Header';
import CardItem from '../components/CardItem/CardItem';
import CardAddForm from '../components/CardAddForm/CardAddForm';
import { useCardAddForm } from '../hooks/cards/useCardAddForm';

function CardAddPage() {
  const {
    cardInformation,
    inputValidation,
    inputError,
    updateInputError,
    handleButtonInputChange,
    handleSingleInputChange,
    handleMultipleInputChange,
    handleSubmit,
  } = useCardAddForm();

  return (
    <>
      <Header content="카드 추가" isOverlayPage={true} />
      <main>
        <CardItem
          className="mg-b-24 center-hoz-item"
          issuer={cardInformation.issuer}
          cardNumber={cardInformation.cardNumber}
          expirationDate={cardInformation.expirationDate}
          ownerName={cardInformation.ownerName}
        />
        <CardAddForm
          cardInformation={cardInformation}
          cardInputValidation={inputValidation}
          cardInputError={inputError}
          onButtonInputChange={handleButtonInputChange}
          onSingleInputChange={handleSingleInputChange}
          onMultipleInputChange={handleMultipleInputChange}
          updateCardInputError={updateInputError}
          handleSubmit={handleSubmit}
        />
      </main>
    </>
  );
}

export default CardAddPage;
