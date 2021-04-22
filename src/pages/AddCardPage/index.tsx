import { useState } from 'react';
import Template from '../../components/common/Template';
import CreditCard from '../../components/CreditCard';

const title = '카드추가';

const AddCardPage = () => {
  const [cardName, setCardName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [cardNumber, setCardNumber] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  });
  const [expirationDate, setExpirationDate] = useState({ year: 0, month: 0 });
  const [cvc, setCvc] = useState(0);
  const [cardColor, setCardColor] = useState('#D2D2D2');

  return (
    <Template title={title} hasPreviousPage>
      <CreditCard
        cardColor={cardColor}
        expirationDate={expirationDate}
        cardName={cardName}
        ownerName={ownerName}
        cardNumber={cardNumber}
      />
      {/* <AddCardForm /> */}
    </Template>
  );
};

export default AddCardPage;
