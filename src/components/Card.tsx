import CardDisplay from "./CardDisplay/CardDisplay";

import CardNumbersInputSection from "./InputSection/CardNumbersInputSection";
import CardExpirationDateInputSection from "./InputSection/CardExpirationDateInputSection";
import CardCVCNumberInputSection from "./InputSection/CardCVCNumberInputSection";
import CardCompanyInputSection from "./InputSection/CardCompanyInputSection";
import CardPasswordInputSection from "./InputSection/CardPasswordInputSection";

import useCardNumbers from "../hooks/useCardNumbers";
import useCardExpirationDate from "../hooks/useCardExpirationDate";
import useCardCompany from "../hooks/useCardCompany";
import useCardPassword from "../hooks/useCardPassword";
import useCardCVCNumber from "../hooks/useCardCVCNumber";
import { useAutoFocus } from "../hooks/useAutoFocus";

import styles from "../css/cardForm.module.css";
import Button from "./common/Button/Button";
import NewCard from "../types/NewCard";


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

const isFulledInput = (items: { [key: string]: string }, condition: number) => {
  return Object.values(items).every((item) => {
    return item.length >= condition;
  });
};

interface CardProps {
  setNewCard: (cardData: NewCard | {}) => void;
}

function Card({ setNewCard }: CardProps) {
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

  const { 
    cardCVCNumber, 
    handleCardCVCNumberChange,
     isError: isCardCVCError,
    errorMessage: cardCVCErrorMessage, 
    } = useCardCVCNumber();

  const isFulledForm =
    isFulledInput(cardNumbers, 4) &&
    isFulledInput(cardExpirationDate, 2) &&
    cardCompany.length > 0 &&
    cardPassword.length == 2 &&
    cardCVCNumber.length === 3;

  const onClick = () => {
    setNewCard({
      cardNumbers,
      cardExpirationDate,
      cardCompany,
      cardPassword,
    });
  };

  const { setRef, moveFocus } = useAutoFocus();

  return (
    <>
      <div className={styles.main}>
        <CardDisplay
          cardNumbers={cardNumbers}
          cardExpirationDate={cardExpirationDate}
          backgroundColor={extractCardCompanyColor(cardCompany)}
        />

        <div className={styles.cardForm}>
          {cardCVCNumber.length === 3 && (
            <CardPasswordInputSection
              cardPassword={cardPassword}
              handleCardPasswordChange={handleCardPasswordChange}
              isError={isCardPasswordError}
              errorMessage={cardPasswordErrorMessage}
              setRef={setRef}
            />
          )}
          {isFulledInput(cardExpirationDate, 2) && (
            <CardCVCNumberInputSection
            cardCVCNumber={cardCVCNumber}
            handleCardCVCNumberChange={handleCardCVCNumberChange}
            isError={isCardCVCError}
            errorMessage={cardCVCErrorMessage}
            setRef={setRef}
            moveFocus={moveFocus} />
          )}
          {cardCompany.length > 0 && (
            <CardExpirationDateInputSection
              cardExpirationDate={cardExpirationDate}
              handleCardExpirationDateChange={handleCardExpirationDateChange}
              isError={isCardExpirationDateError}
              errorMessage={cardExpirationDateErrorMessage}
              setRef={setRef}
              moveFocus={moveFocus}
            />
          )}
          {isFulledInput(cardNumbers, 4) && (
            <CardCompanyInputSection
              companies={COMPANIES}
              selectedOption={cardCompany}
              handleCardNumbersChange={handleCardCompanyChange}
              errorMessage={cardCompanyErrorMessage}
              setRef={setRef}
              moveFocus={moveFocus}
            />
          )}
          <CardNumbersInputSection
            cardNumbers={cardNumbers}
            handleCardNumbersChange={handleCardNumbersChange}
            isError={isCardNumbersError}
            errorMessage={cardNumbersErrorMessage}
            setRef={setRef}
            moveFocus={moveFocus}
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
