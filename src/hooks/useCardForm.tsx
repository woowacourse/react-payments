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
    onChangeCardNumber,
    errorMessage: cardNumberErrorMessage,
    setInputRef: setCardNumberInputRef,
    isCardNumberValid,
  } = useCardNumber({
    handleNextStep: () => handleNextStep(STEP_NAME.CardCompany),
  });

  const {
    cardValidityPeriod,
    onChangeMonth,
    onChangeYear,
    errorMessage: cardValidityPeriodErrorMessage,
    setInputRef: setCardValidityPeriodInputRef,
    isCardValidityPeriodValid,
  } = useCardValidityPeriod({
    handleNextStep: () => handleNextStep(STEP_NAME.CardCVC),
  });

  const {
    cardCVC,
    onChangeCVC,
    errorMessage: cardCVCErrorMessage,
    isCardCVCValid,
  } = useCardCVC({
    handleNextStep: () => handleNextStep(STEP_NAME.CardPassword),
  });

  const {
    selectedCard,
    CARD_COMPANY_NAMES,
    CARD_COMPANY_COLORS,
    CARD_COMPANY_PLACEHOLDER,
    onClickCardCompany,
    isCardCompanyValid,
  } = useCardCompany({
    handleNextStep: () => handleNextStep(STEP_NAME.CardValidityPeriod),
  });

  const {
    cardPassword,
    onChangeCardPassword,
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
      onChangeCardNumber,
      onChangeMonth,
      onChangeYear,
      onChangeCVC,
      onClickCardCompany,
      onChangeCardPassword,
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
