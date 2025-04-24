import CardNumbersInputSection from "./InputSection/CardNumbersInputSection";
import CardExpirationDateInputSection from "./InputSection/CardExpirationDateInputSection";
import CardCVCNumberInputSection from "./InputSection/CardCVCNumberInputSection";
import CardDisplay from "./CardDisplay/CardDisplay";
import CardCompanyInputSection from "./InputSection/CardCompanyInputSection";
import CardPasswordInputSection from "./InputSection/CardPasswordInputSection";
import CardOwnerNameInputSection from "./InputSection/CardOwnerNameInputSection";
import useCardNumbers from "../hooks/useCardNumbers";
import useCardExpirationDate from "../hooks/useCardExpirationDate";
import useCardCompany from "../hooks/useCardCompany";
import useCardPassword from "../hooks/useCardPassword";
import useCardOwnerName from "../hooks/useCardOwnerName";
import styles from "../css/cardForm.module.css";
import Button from "./common/Button/Button";

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

function Card({ setNewCard }) {
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

  const onClick = () => {
    setNewCard({
      cardNumbers,
      cardExpirationDate,
      cardCompany,
      cardPassword,
      cardOwnerName,
    });
  };

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
          {cardOwnerName.length > 0 && (
            <CardPasswordInputSection
              cardPassword={cardPassword}
              handleCardPasswordChange={handleCardPasswordChange}
              isError={isCardPasswordError}
              errorMessage={cardPasswordErrorMessage}
            />
          )}
          {cardOwnerName.length > 0 && <CardCVCNumberInputSection />}
          {isFulledInput(cardExpirationDate, 2) && (
            <CardOwnerNameInputSection
              cardOwnerName={cardOwnerName}
              handleCardOwnerNameChange={handleCardOwnerNameChange}
            />
          )}
          {cardCompany.length > 0 && (
            <CardExpirationDateInputSection
              cardExpirationDate={cardExpirationDate}
              handleCardExpirationDateChange={handleCardExpirationDateChange}
              isError={isCardExpirationDateError}
              errorMessage={cardExpirationDateErrorMessage}
            />
          )}
          {isFulledInput(cardNumbers, 4) && (
            <CardCompanyInputSection
              companies={COMPANIES}
              selectedOption={cardCompany}
              handleCardNumbersChange={handleCardCompanyChange}
              errorMessage={cardCompanyErrorMessage}
            />
          )}
          <CardNumbersInputSection
            cardNumbers={cardNumbers}
            handleCardNumbersChange={handleCardNumbersChange}
            isError={isCardNumbersError}
            errorMessage={cardNumbersErrorMessage}
          />
        </div>

        <div>
          {isFulledForm && (
            <Button
              text="확인"
              link="/react-payments/complete/"
              onClick={onClick}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
