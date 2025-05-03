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
import { useCardState } from "./useCardState";
import { CARD_COMPANIES } from "../constants/cardCompanyInfo";

export const useCardInputHandlers = (
  cardState: ReturnType<typeof useCardState>
) => {
  const {
    formValues,
    setFormValues,
    setFormErrors,
    cardNumbersInputRefs,
    expiryInputRefs,
    setShowCardCompanySelect,
    setShowExpiryInput,
    setShowCVCInput,
    setShowPasswordInput,
    setIsValidForm,
    setIsOpenSelectCardCompany,
  } = cardState;

  const handleCardNumbers =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newCardNumbers = [...formValues.cardNumbers];
      newCardNumbers[index] = value;

      const { isValid, errorIndex, helperText } = validateCardNumbers(
        newCardNumbers,
        CARD_VALIDATION_INFO.CARD_MAX_LENGTH
      );

      setFormValues((prev) => ({ ...prev, cardNumbers: newCardNumbers }));
      setFormErrors((prev) => ({
        ...prev,
        cardNumbers: { message: helperText, index: errorIndex },
      }));

      if (errorIndex !== null) {
        cardNumbersInputRefs.current[errorIndex]?.focus();
      }

      if (isValid && isCardNumbersValid(newCardNumbers, helperText)) {
        setShowCardCompanySelect(true);
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
    const { expirationDate } = formValues;
    let nextMonth = expirationDate.month;
    let nextYear = expirationDate.year;

    if (name === "month") nextMonth = value;
    if (name === "year") nextYear = value;

    const { isMonthValid, monthHelperText } = validateMonth(
      nextMonth,
      CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH
    );
    const { isYearValid, yearHelperText } = validateYear(
      nextYear,
      CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH
    );

    setFormValues((prev) => ({
      ...prev,
      expirationDate: { month: nextMonth, year: nextYear },
    }));

    if (!isMonthValid) {
      expiryInputRefs.current[0]?.focus();
      setFormErrors((prev) => ({
        ...prev,
        expiry: { message: monthHelperText, index: 0 },
      }));
      return;
    }

    if (!isYearValid) {
      expiryInputRefs.current[1]?.focus();
      setFormErrors((prev) => ({
        ...prev,
        expiry: { message: yearHelperText, index: 1 },
      }));
      return;
    }

    setFormErrors((prev) => ({
      ...prev,
      expiry: { message: "", index: null },
    }));

    setShowCVCInput(true);
  };

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const { isValid, helperText } = validateCVC(
      value,
      CARD_VALIDATION_INFO.CVC_MAX_LENGTH
    );

    setFormValues((prev) => ({ ...prev, CVC: value }));

    if (!isValid) {
      setFormErrors((prev) => ({ ...prev, CVC: helperText }));
    } else {
      setFormErrors((prev) => ({ ...prev, CVC: "" }));
      setShowPasswordInput(true);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const { isValid, helperText } = validatePassword(
      value,
      CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH
    );

    setFormValues((prev) => ({ ...prev, password: value }));

    if (!isValid) {
      setFormErrors((prev) => ({ ...prev, password: helperText }));
    } else {
      setFormErrors((prev) => ({ ...prev, password: "" }));
      setIsValidForm(true);
    }
  };

  const handleCardCompany = (option: string) => {
    const selectedCompany = CARD_COMPANIES.find(
      (company) => company.name === option
    );

    setFormValues((prev) => ({
      ...prev,
      cardCompany: option,
      cardColor: selectedCompany?.color || "#333333",
    }));

    setIsOpenSelectCardCompany(false);

    if (isCardCompanySelected(option)) {
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
