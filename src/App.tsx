import CardNumbersInputSection from "./components/InputSection/CardNumbersInputSection";
import CardExpirationDateInputSection from "./components/InputSection/CardExpirationDateInputSection";
import CardCVCNumberInputSection from "./components/InputSection/CardCVCNumberInputSection";
import styles from "./css/cardForm.module.css";
import useCardNumbers from "./hooks/useCardNumbers";
import useCardExpirationDate from "./hooks/useCardExpirationDate";
import CardDisplay from "./components/CardDisplay/CardDisplay";
import CardCompanyInputSection from "./components/InputSection/CardCompanyInputSection";

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
          <CardCompanyInputSection
            companies={[
              { value: "BC", label: "BC" },
              { value: "신한", label: "신한" },
              { value: "카카오", label: "카카오" },
              { value: "현대", label: "현대" },
              { value: "우리", label: "우리" },
              { value: "롯데", label: "롯데" },
              { value: "하나", label: "하나" },
              { value: "국민", label: "국민" },
            ]}
            handleCardNumbersChange={() => {}}
            isError={{ cardCompany: false }}
            errorMessage=""
          />
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
