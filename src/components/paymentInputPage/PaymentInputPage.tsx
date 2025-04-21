import CardPreview from './cardPreview/CardPreview';
import CardInputForm from './cardInputForm/CardInputForm';
import styles from './PaymentInputPage.module.css';
import { useState } from 'react';

export interface ExpirationDateType {
  month: string;
  year: string;
}

function PaymentInputPage() {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>({
    month: '',
    year: '',
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
        />
        <CardInputForm
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
          setCardNumbers={setCardNumbers}
          setExpirationDate={setExpirationDate}
        />
      </div>
    </section>
  );
}

export default PaymentInputPage;
