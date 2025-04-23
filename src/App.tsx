import CardNumbersInputSection from "./components/InputSection/CardNumbersInputSection";
import CardExpirationDateInputSection from "./components/InputSection/CardExpirationDateInputSection";
import CardCVCNumberInputSection from "./components/InputSection/CardCVCNumberInputSection";
import CardDisplay from "./components/CardDisplay/CardDisplay";
import CardCompanyInputSection from "./components/InputSection/CardCompanyInputSection";
import CardPasswordInputSection from "./components/InputSection/CardPasswordInputSection";
import CardOwnerNameInputSection from "./components/InputSection/CardOwnerNameInputSection";
import useCardNumbers from "./hooks/useCardNumbers";
import useCardExpirationDate from "./hooks/useCardExpirationDate";
import useCardCompany from "./hooks/useCardCompany";
import useCardPassword from "./hooks/useCardPassword";
import useCardOwnerName from "./hooks/useCardOwnerName";
import styles from "./css/cardForm.module.css";

const COMPANIES = [
  { value: "BC카드", label: "BC카드", color: "#F04651" },
  { value: "신한카드", label: "신한카드", color: "#0046FF" },
  { value: "카카오뱅크", label: "카카오뱅크", color: "#FFE600" },
  { value: "현대카드", label: "현대카드", color: "#000000" },
  { value: "우리카드", label: "우리카드", color: "#007BC8" },
  { value: "롯데카드", label: "롯데카드", color: "#ED1C24" },
  { value: "하나카드", label: "하나카드", color: "#009490" },
  { value: "국민카드", label: "국민카드", color: "#6A6056" },
];

const extractCardCompanyColor = (company: string) => {
  const BASIC_COLOR = "#000000";
  const companyData = COMPANIES.find((item) => item.value === company);
  return companyData ? companyData.color : BASIC_COLOR;
};

const isFulledInput = (items, condition: number) => {
  return Object.values(items).every((item) => {
    return item.length >= condition;
  });
};

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

  const { cardOwnerName, handleCardOwnerNameChange } = useCardOwnerName();

  const isFulledForm =
    isFulledInput(cardNumbers, 4) &&
    isFulledInput(cardExpirationDate, 2) &&
    cardCompany.length > 0 &&
    cardPassword.length == 2 &&
    cardOwnerName.length > 0;

  return (
    <>
      <div className={styles.main}>
        <CardDisplay
          cardNumbers={cardNumbers}
          cardExpirationDate={cardExpirationDate}
          cardOwnerName={cardOwnerName}
          backgroundColor={extractCardCompanyColor(cardCompany)}
        />

        <div className={styles.cardForm}>
          <CardPasswordInputSection
            cardPassword={cardPassword}
            handleCardPasswordChange={handleCardPasswordChange}
            isError={isCardPasswordError}
            errorMessage={cardPasswordErrorMessage}
          />
          <CardCVCNumberInputSection />
          <CardOwnerNameInputSection
            cardOwnerName={cardOwnerName}
            handleCardOwnerNameChange={handleCardOwnerNameChange}
          />
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

        <div>{isFulledForm && <button>확인</button>}</div>
      </div>
    </>
  );
}

export default App;
