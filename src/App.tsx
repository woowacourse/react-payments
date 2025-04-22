import CardNumbersInputSection from "./components/InputSection/CardNumbersInputSection";
import CardExpirationDateInputSection from "./components/InputSection/CardExpirationDateInputSection";
import CardCVCNumberInputSection from "./components/InputSection/CardCVCNumberInputSection";
import styles from "./css/cardForm.module.css";
import useCardNumbers from "./hooks/useCardNumbers";
import useCardExpirationDate from "./hooks/useCardExpirationDate";
import useCardCompany from "./hooks/useCardCompany";
import CardDisplay from "./components/CardDisplay/CardDisplay";
import CardCompanyInputSection from "./components/InputSection/CardCompanyInputSection";
import CardPasswordInputSection from "./components/InputSection/CardPasswordInputSection";
import useCardPassword from "./hooks/useCardPassword";

const COMPANIES = [
  { value: "BC", label: "BC" },
  { value: "신한", label: "신한" },
  { value: "카카오", label: "카카오" },
  { value: "현대", label: "현대" },
  { value: "우리", label: "우리" },
  { value: "롯데", label: "롯데" },
  { value: "하나", label: "하나" },
  { value: "국민", label: "국민" },
];

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

  const {
    cardCompany,
    handleCardCompanyChange,
    isError: isCardCompanyError,
    errorMessage: cardCompanyErrorMessage,
  } = useCardCompany();

  const {
    cardPassword,
    handleCardPasswordChange,
    isError: isCardPasswordError,
    errorMessage: cardPasswordErrorMessage,
  } = useCardPassword();

  return (
    <>
      <div className={styles.main}>
        <CardDisplay
          cardNumbers={cardNumbers}
          cardExpirationDate={cardExpirationDate}
        />
        <div className={styles.cardForm}>
          <CardPasswordInputSection
            cardPassword={cardPassword}
            handleCardPasswordChange={handleCardPasswordChange}
            isError={isCardPasswordError}
            errorMessage={cardPasswordErrorMessage}
          />
          <CardCVCNumberInputSection />
          <CardExpirationDateInputSection
            cardExpirationDate={cardExpirationDate}
            handleCardExpirationDateChange={handleCardExpirationDateChange}
            isError={isCardExpirationDateError}
            errorMessage={cardExpirationDateErrorMessage}
          />
          <CardCompanyInputSection
            companies={COMPANIES}
            selectedOption={cardCompany}
            handleCardNumbersChange={handleCardCompanyChange}
            errorMessage={cardCompanyErrorMessage}
          />
          <CardNumbersInputSection
            cardNumbers={cardNumbers}
            handleCardNumbersChange={handleCardNumbersChange}
            isError={isCardNumbersError}
            errorMessage={cardNumbersErrorMessage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
