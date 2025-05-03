import {
  validateCardNumbers,
  validateMonth,
  validateYear,
  validateCVC,
  validatePassword,
  isCardNumbersValid,
  isCardCompanySelected,
} from "../domain/validate";
import { CARD_VALIDATION_INFO } from "../constants/cardValidationInfo";
import { CardContextType } from "./useCardState";
import { CARD_COMPANIES } from "../constants/cardCompanyInfo";

export const useCardInputHandlers = (cardState: CardContextType) => {
  const {
    cardNumbers,
    setCardNumbers,
    setCardNumbersHelperText,
    setCardNumbersErrorIndex,
    cardNumbersInputRefs,
    setMonth,
    month,
    setYear,
    year,
    setExpiryHelperText,
    setExpiryErrorIndex,
    expiryInputRefs,
    setCVC,
    setCVCHelperText,
    setPassword,
    setPasswordHelperText,
    setIsValidCardNumbers,
    setShowCardCompanySelect,
    setIsValidExpiry,
    setShowCVCInput,
    setShowPasswordInput,
    setCardColor,
    setCardCompany,
    setIsOpenSelectCardCompany,
    setShowExpiryInput,
    setIsValidCardCompany,
    setIsValidCVC,
    setIsValidPassword,
  } = cardState;

  const handleCardNumbers =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const newCardNumbers = [...cardNumbers];
      newCardNumbers[index] = value;
      setCardNumbers(newCardNumbers);

      const { isValid, errorIndex, helperText } = validateCardNumbers(
        newCardNumbers,
        CARD_VALIDATION_INFO.CARD_MAX_LENGTH
      );

      setCardNumbersHelperText(helperText);
      setCardNumbersErrorIndex(errorIndex);

      if (errorIndex !== null)
        cardNumbersInputRefs.current[errorIndex]?.focus();

      if (isValid && isCardNumbersValid(newCardNumbers, helperText)) {
        setIsValidCardNumbers(true);
        setShowCardCompanySelect(true);
      } else {
        setIsValidCardNumbers(false);
      }

      if (
        value.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH &&
        index < CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS - 1
      ) {
        cardNumbersInputRefs.current[index + 1]?.focus();
      }
    };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let nextMonth = month;
    let nextYear = year;

    if (name === "month") {
      nextMonth = value;
      setMonth(value);
    } else if (name === "year") {
      nextYear = value;
      setYear(value);
    }

    const { isMonthValid, monthHelperText } = validateMonth(
      nextMonth,
      CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH
    );

    const { isYearValid, yearHelperText } = validateYear(
      nextYear,
      CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH
    );

    if (isMonthValid) expiryInputRefs.current[1]?.focus();
    if (!isMonthValid) {
      setExpiryHelperText(monthHelperText);
      setExpiryErrorIndex(0);
      setIsValidExpiry(false);
    } else if (!isYearValid) {
      setExpiryHelperText(yearHelperText);
      setExpiryErrorIndex(1);
      setIsValidExpiry(false);
    } else {
      setExpiryHelperText("");
      setExpiryErrorIndex(null);
      setIsValidExpiry(true);
      setShowCVCInput(true);
    }
  };

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCVC(e.target.value);
    const { isValid, helperText } = validateCVC(
      e.target.value,
      CARD_VALIDATION_INFO.CVC_MAX_LENGTH
    );
    if (!isValid) {
      setCVCHelperText(helperText);
      setIsValidCVC(false);
    } else {
      setCVCHelperText("");
      setIsValidCVC(true);
      setShowPasswordInput(true);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const { isValid, helperText } = validatePassword(
      e.target.value,
      CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH
    );
    if (!isValid) {
      setPasswordHelperText(helperText);
      setIsValidPassword(false);
    } else {
      setPasswordHelperText("");
      setIsValidPassword(true);
    }
  };

  const handleCardCompany = (option: string) => {
    setCardCompany(option);
    setIsOpenSelectCardCompany(false);

    const selectedCompany = CARD_COMPANIES.find(
      (company) => company.name === option
    );
    if (selectedCompany) setCardColor(selectedCompany.color);
    if (isCardCompanySelected(option)) {
      setIsValidCardCompany(true);
      setShowExpiryInput(true);
    }
  };

  return {
    handleCardNumbers,
    handleDate,
    handleCVC,
    handlePassword,
    handleCardCompany,
  };
};
