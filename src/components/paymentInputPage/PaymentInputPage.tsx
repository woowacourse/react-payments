import CardPreview from './cardPreview/CardPreview';
import CardInputForm from './cardInputForm/CardInputForm';
import styles from './PaymentInputPage.module.css';
import { useState } from 'react';

export interface ExpirationDateType {
  month: string;
  year: string;
}

function PaymentInputPage() {
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({
    month: '',
    year: '',
  });
  const [cardCVC, setCardCVC] = useState('');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview expirationDate={expirationDate} />
        <CardInputForm
          cardCVC={cardCVC}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
          setCardCVC={setCardCVC}
        />
      </div>
    </section>
  );
}

export default PaymentInputPage;
