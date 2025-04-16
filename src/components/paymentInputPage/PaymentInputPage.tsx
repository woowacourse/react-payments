import CardPreview from './cardPreview/CardPreview';
import CardInputForm from './cardInputForm/CardInputForm';
import styles from './PaymentInputPage.module.css';
import { useState } from 'react';

function PaymentInputPage() {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const [expirationDate, setExpirationDate] = useState<string[]>([]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
        />
        <CardInputForm
          setCardNumbers={setCardNumbers}
          setExpirationDate={setExpirationDate}
        />
      </div>
    </section>
  );
}

export default PaymentInputPage;
