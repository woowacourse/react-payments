import { useContext } from 'react';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import CardPreview from '../../components/common/CardPreview/CardPreview';
import Header from '../../components/common/Header/Header';
import { cardImages } from '../cardImages';
import { CardInfoContext } from '../../contexts/CardInfoProvider';

const CardRegistration = () => {
  const { cardIssuer, cardNumber, cardOwnerName, cardExpirationDate } = useContext(CardInfoContext);
  return (
    <>
      <Header title="카드 추가" hasBackButton={true} />
      <CardPreview
        cardIssuer={cardIssuer}
        cardNumber={cardNumber.value}
        cardOwnerName={cardOwnerName.value}
        cardExpirationDate={cardExpirationDate.value}
        image={cardImages[cardIssuer]}
      />
      <AddCardForm />
    </>
  );
};

export default CardRegistration;
