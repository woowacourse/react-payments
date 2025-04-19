import CardNumbersInputSection from "./components/InputSection/CardNumbersInputSection";
import CardExpirationDateInputSection from "./components/InputSection/CardExpirationDateInputSection";
import CardCVCNumberInputSection from "./components/InputSection/CardCVCNumberInputSection";
import styles from "./css/cardForm.module.css";
import useCardNumbers from "./hooks/useCardNumbers";
import useCardExpirationDate from "./hooks/useCardExpirationDate";
import CardDisplay from "./components/CardDisplay/CardDisplay";

function App() {
  const {
    cardNumbers,
    handleCardNumbersChange,
    isError: isCardNumbersError,
    errorMessage: cardNumbersErrorMessage,
  } = useCardNumbers();

  const {
    cardExpirationDate,
    handleCardExpirationDateChange,
    isError: isCardExpirationDateError,
    errorMessage: cardExpirationDateErrorMessage,
  } = useCardExpirationDate();

  return (
    <>
      <div className={styles.main}>
        <CardDisplay
          cardNumbers={cardNumbers}
          cardExpirationDate={cardExpirationDate}
        />
        <div className={styles.cardForm}>
          <CardNumbersInputSection
            cardNumbers={cardNumbers}
            handleCardNumbersChange={handleCardNumbersChange}
            isError={isCardNumbersError}
            errorMessage={cardNumbersErrorMessage}
          />
          <CardExpirationDateInputSection
            cardExpirationDate={cardExpirationDate}
            handleCardExpirationDateChange={handleCardExpirationDateChange}
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
