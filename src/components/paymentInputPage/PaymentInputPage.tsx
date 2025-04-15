import CardPreview from './cardPreview/CardPreview';
import CardInputForm from './cardInputForm/CardInputForm';
import styles from './PaymentInputPage.module.css';

function PaymentInputPage() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview />
        <CardInputForm />
      </div>
    </section>
  );
}

export default PaymentInputPage;
