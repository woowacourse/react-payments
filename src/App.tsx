import CardNumbersInputSection from './components/InputSection/CardNumbersInputSection';
import CardExpirationDateInputSection from './components/InputSection/CardExpirationDateInputSection';
import CardCVCNumberInputSection from './components/InputSection/CardCVCNumberInputSection';
import styles from './css/cardForm.module.css';
import CardDisplay from './components/CardDisplay';
import useCardNumbers from './hooks/useCardNumbers';
import useCardExpirationDate from './hooks/useCardExpirationDate';

function App() {
  const {
    cardNumbers,
    setCardNumbers,
    isError: isCardNumbersError,
    errorMessage: cardNumbersErrorMessage,
  } = useCardNumbers();

  const {
    cardExpirationDate,
    setCardExpirationDate,
    isError: isCardExpirationDateError,
    errorMessage: cardExpirationDateErrorMessage,
  } = useCardExpirationDate();

  return (
    <>
      <h1>React Payments</h1>
      <div className={styles.main}>
        <CardDisplay
          cardNumbers={cardNumbers}
          cardExpirationDate={cardExpirationDate}
        />
        <div className={styles.cardForm}>
          <CardNumbersInputSection
            cardNumbers={cardNumbers}
            setCardNumbers={setCardNumbers}
            isError={isCardNumbersError}
            errorMessage={cardNumbersErrorMessage}
          />
          <CardExpirationDateInputSection
            cardExpirationDate={cardExpirationDate}
            setCardExpirationDate={setCardExpirationDate}
            isError={isCardExpirationDateError}
            errorMessage={cardExpirationDateErrorMessage}
          />
          <CardCVCNumberInputSection />
        </div>
      </div>
    </>
  );
}

export default App;
