import CardNumbersInputSection from './components/InputSection/CardNumbersInputSection';
import CardExpirationDateInputSection from './components/InputSection/CardExpirationDateInputSection';
import CardCVCNumberInputSection from './components/InputSection/CardCVCNumberInputSection';
import styles from './css/cardForm.module.css';

function App() {
  return (
    <>
      <h1>React Payments</h1>
      <div className={styles.cardForm}>
        <CardNumbersInputSection />
        <CardExpirationDateInputSection />
        <CardCVCNumberInputSection />
      </div>
    </>
  );
}

export default App;
