import {
  validateFirstCardNumbers,
  validateCardNumbers,
  validateMonth,
  validateYear,
  validateCVC,
  validatePassword,
} from "../domain/validate";
import { CARD_VALIDATION_INFO } from "../constants/cardValidationInfo";
import ERROR from "../constants/errorMessage";
import CustomCardNumbersError from "../error/CustomCardNumbersError";
import { CardContextType } from "./useCardState";

export const useCardInputHandlers = (cardState: CardContextType) => {
  const {
    cardNumbers,
    setCardNumbers,
    cardNumbersHelperText,
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
    CVCInputRef,
    setPassword,
    setPasswordHelperText,
    passwordInputRef,
  } = cardState;

  const handleCardNumbers =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      try {
        const newCardNumbers = [...cardNumbers];
        newCardNumbers[index] = value;
        setCardNumbers(newCardNumbers);

        validateFirstCardNumbers(newCardNumbers[0]);
        validateCardNumbers(
          newCardNumbers,
          CARD_VALIDATION_INFO.CARD_MAX_LENGTH,
        );

        if (cardNumbersHelperText !== "") {
          cardNumbersInputRefs.current[index]?.focus();
        }
        setCardNumbersHelperText("");
        setCardNumbersErrorIndex(null);

        if (
          value.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH &&
          index < CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS - 1
        ) {
          cardNumbersInputRefs.current[index + 1]?.focus();
        }
      } catch (error: unknown) {
        if (error instanceof CustomCardNumbersError) {
          if (error.message === ERROR.CARD_NUMBER.INVALID) {
            cardNumbersInputRefs.current[0]?.focus();
            setCardNumbersErrorIndex(0);
          } else {
            cardNumbersInputRefs.current[error.index]?.focus();
            setCardNumbersErrorIndex(error.index);
          }
          setCardNumbersHelperText(error.message);
        }
      }
    };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    try {
      if (name === "month") {
        setMonth(value);
        validateMonth(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        expiryInputRefs.current[1]?.focus();
        validateYear(year, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
      } else if (name === "year") {
        setYear(value);
        validateMonth(month, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        validateYear(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
      }

      setExpiryHelperText("");
      setExpiryErrorIndex(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === ERROR.EXPIRY.INVALID_MONTH) {
          expiryInputRefs.current[0]?.focus();
          setExpiryErrorIndex(0);
        } else if (error.message === ERROR.EXPIRY.INVALID_YEAR) {
          expiryInputRefs.current[1]?.focus();
          setExpiryErrorIndex(1);
        }
        setExpiryHelperText(error.message);
      }
    }
  };

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setCVC(e.target.value);
      validateCVC(e.target.value, CARD_VALIDATION_INFO.CVC_MAX_LENGTH);
      setCVCHelperText("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setCVCHelperText(error.message);
        CVCInputRef.current?.focus();
      }
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setPassword(e.target.value);
      validatePassword(
        e.target.value,
        CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH,
      );
      setPasswordHelperText("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setPasswordHelperText(error.message);
        passwordInputRef.current?.focus();
      }
    }
  };

  return {
    handleCardNumbers,
    handleDate,
    handleCVC,
    handlePassword,
  };
};
