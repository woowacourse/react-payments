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
  } = useCardNumber();

  const {
    cardValidityPeriod,
    onChangeCardValidityPeriod,
    errorMessage: cardValidityPeriodErrorMessage,
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
    const filteredErrorMessageList = errorMessageList.filter(
      (errorMessage) => errorMessage !== '',
    );

    if (filteredErrorMessageList.length === 0) {
      return '';
    }
    return filteredErrorMessageList[0];
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
      onChangeCardValidityPeriod,
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
  };
};

export default useCardForm;
