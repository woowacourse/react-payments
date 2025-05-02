import useCardNumber from './useCardNumber';
import useCardValidityPeriod from './useCardValidityPeriod';
import useCardCVC from './useCardCVC';
import useCardCompany from './useCardCompany';
import useCardPassword from './useCardPassword';
import useStep from './useStep';
import getErrorMessageFromList from '../utils/getErrorMessageFromList';

const useCardForm = () => {
  const {
    cardNumber,
    onChangeCardNumber,
    errorMessage: cardNumberErrorMessage,
    setInputRef: setCardNumberInputRef,
    isCardNumberValid,
  } = useCardNumber();

  const {
    cardValidityPeriod,
    onChangeMonth,
    onChangeYear,
    errorMessage: cardValidityPeriodErrorMessage,
    setInputRef: setCardValidityPeriodInputRef,
    isCardValidityPeriodValid,
  } = useCardValidityPeriod();

  const {
    cardCVC,
    onChangeCVC,
    errorMessage: cardCVCErrorMessage,
    isCardCVCValid,
  } = useCardCVC();

  const {
    selectedCard,
    CARD_COMPANY_NAMES,
    CARD_COMPANY_COLORS,
    CARD_COMPANY_PLACEHOLDER,
    onClickCardCompany,
    isCardCompanyValid,
  } = useCardCompany();

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

  const { step, STEP_NAME } = useStep({
    isCardNumberValid,
    isCardCompanyValid,
    isCardValidityPeriodValid,
    isCardCVCValid,
  });

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
