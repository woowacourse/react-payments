import CardPreview from './cardPreview/CardPreview';
import CardInputForm from './cardInputForm/CardInputForm';
import styles from './PaymentInputPage.module.css';
import { useState } from 'react';

export interface ExpiryDateType {
  month: string;
  year: string;
}

function PaymentInputPage() {
  const [expiryDate, setExpiryDate] = useState<ExpiryDateType>({
    month: '',
    year: '',
  });
  const [cardCVC, setCardCVC] = useState('');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview expiryDate={expiryDate} />
        <CardInputForm
          cardCVC={cardCVC}
          expiryDate={expiryDate}
          setExpiryDate={setExpiryDate}
          setCardCVC={setCardCVC}
        />
      </div>
    </section>
  );
}

export default PaymentInputPage;
