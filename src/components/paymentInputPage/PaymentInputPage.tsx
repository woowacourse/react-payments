import CardPreview from './cardPreview/CardPreview';
import CardInputForm from './cardInputForm/CardInputForm';
import styles from './PaymentInputPage.module.css';
import { useState } from 'react';

export interface ExpirationDateType {
  month: string;
  year: string;
}

function PaymentInputPage() {
  const [cardIssuer, setCardIssuer] = useState('');
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({
    month: '',
    year: '',
  });
  const [cardCVC, setCardCVC] = useState('');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview
          cardIssuer={cardIssuer}
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
        />
        <CardInputForm
          cardCVC={cardCVC}
          cardIssuer={cardIssuer}
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
          setCardIssuer={setCardIssuer}
          setCardNumbers={setCardNumbers}
          setExpirationDate={setExpirationDate}
          setCardCVC={setCardCVC}
        />
      </div>
    </section>
  );
}

export default PaymentInputPage;
