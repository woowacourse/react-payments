import useCardNumber from './useCardNumber';
import useCardValidityPeriod from './useCardValidityPeriod';
import useCardCVC from './useCardCVC';
import useCardCompany from './useCardCompany';
import useCardPassword from './useCardPassword';
import useStep from './useStep';

const useCardForm = () => {
  const {
    cardNumber,
    onChangeCardNumber,
    errorMessage: cardNumberErrorMessage,
    setInputRef: setCardNumberInputRef,
  } = useCardNumber();

  const {
    cardValidityPeriod,
    onChangeMonth,
    onChangeYear,
    errorMessage: cardValidityPeriodErrorMessage,
    setInputRef: setCardValidityPeriodInputRef,
  } = useCardValidityPeriod();

  const {
    cardCVC,
    onChangeCVC,
    errorMessage: cardCVCErrorMessage,
  } = useCardCVC();

  const {
    selectedCard,
    CARD_COMPANY_NAMES,
    CARD_COMPANY_COLORS,
    CARD_COMPANY_PLACEHOLDER,
    onClickCardCompany,
  } = useCardCompany();

  const {
    cardPassword,
    onChangeCardPassword,
    errorMessage: cardPasswordErrorMessage,
  } = useCardPassword();

  const getErrorMessageFromList = (errorMessageList: string[]) => {
    return errorMessageList.find((errorMessage) => errorMessage !== '') ?? '';
  };

  const formStatus = {
    cardNumberOkay:
      cardNumber.every((value) => value !== '') &&
      !getErrorMessageFromList(cardNumberErrorMessage),
    cardCompanyOkay: selectedCard !== null,
    cardValidityPeriodOkay:
      Object.values(cardValidityPeriod).every((value) => value !== '') &&
      !getErrorMessageFromList(Object.values(cardValidityPeriodErrorMessage)),
    cardCVCOkay: cardCVC !== '' && !cardCVCErrorMessage,
    cardPasswordOkay: cardPassword !== '' && !cardPasswordErrorMessage,
  };

  const {
    cardNumberOkay,
    cardCompanyOkay,
    cardValidityPeriodOkay,
    cardCVCOkay,
  } = formStatus;

  const canSubmit = Object.values(formStatus).every(Boolean);

  const { step, STEP_NAME } = useStep({
    cardCVCOkay,
    cardCompanyOkay,
    cardNumberOkay,
    cardValidityPeriodOkay,
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
