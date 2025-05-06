import useCardNumber from './useCardNumber';
import useCardValidityPeriod from './useCardValidityPeriod';
import useCardCVC from './useCardCVC';
import useCardCompany from './useCardCompany';
import useCardPassword from './useCardPassword';
import useStep from './useStep';
import getErrorMessageFromList from '../utils/getErrorMessageFromList';

const useCardForm = () => {
  const { step, STEP_NAME, handleNextStep } = useStep();

  const {
    cardNumber,
    handleChangeCardNumber,
    errorMessage: cardNumberErrorMessage,
    setInputRef: setCardNumberInputRef,
    isCardNumberValid,
  } = useCardNumber({
    onComplete: () => handleNextStep(STEP_NAME.CardCompany),
  });

  const {
    cardValidityPeriod,
    handleChangeMonth,
    handleChangeYear,
    errorMessage: cardValidityPeriodErrorMessage,
    setInputRef: setCardValidityPeriodInputRef,
    isCardValidityPeriodValid,
  } = useCardValidityPeriod({
    onComplete: () => handleNextStep(STEP_NAME.CardCVC),
  });

  const {
    cardCVC,
    handleChangeCVC,
    errorMessage: cardCVCErrorMessage,
    isCardCVCValid,
  } = useCardCVC({
    onComplete: () => handleNextStep(STEP_NAME.CardPassword),
  });

  const {
    selectedCard,
    CARD_COMPANY_NAMES,
    CARD_COMPANY_COLORS,
    CARD_COMPANY_PLACEHOLDER,
    handleClickCardCompany,
    isCardCompanyValid,
  } = useCardCompany({
    onComplete: () => handleNextStep(STEP_NAME.CardValidityPeriod),
  });

  const {
    cardPassword,
    handleChangeCardPassword,
    errorMessage: cardPasswordErrorMessage,
    isCardPasswordValid,
  } = useCardPassword();

  const canSubmit =
    isCardNumberValid &&
    isCardCompanyValid &&
    isCardValidityPeriodValid &&
    isCardCVCValid &&
    isCardPasswordValid;

  return {
    formData: {
      cardNumber,
      cardValidityPeriod,
      cardCVC,
      selectedCard,
      cardPassword,
    },

    eventHandlers: {
      handleChangeCardNumber,
      handleChangeMonth,
      handleChangeYear,
      handleChangeCVC,
      handleClickCardCompany,
      handleChangeCardPassword,
    },

    cardCompany: {
      NAMES: CARD_COMPANY_NAMES,
      COLORS: CARD_COMPANY_COLORS,
      PLACEHOLDER: CARD_COMPANY_PLACEHOLDER,
    },

    validation: {
      cardNumberErrorMessage,
      cardValidityPeriodErrorMessage,
      cardCVCErrorMessage,
      cardPasswordErrorMessage,
      getErrorMessageFromList,
    },

    status: {
      canSubmit,
      step,
      STEP_NAME,
    },
    setInputRef: {
      setCardNumberInputRef,
      setCardValidityPeriodInputRef,
    },
  };
};

export default useCardForm;
