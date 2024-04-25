import useCardNumbers from './useCardNumbers';
import useExpirationDate from './useExpirationDate';
import useOwnerName from './useOwnerName';
import useNumberInput from './useNumberInput';
import useDropdown from './useDropdown';
import { FORM_ITEM_NAME_LIST } from '../constants/addNewCardFormItemNameList';
import useShowCase from './useShowCase';
import { useEffect } from 'react';
import { CardCompany } from '../types/cardCompany';

const initialShowCaseValue = {
  [FORM_ITEM_NAME_LIST.CARD_NUMBERS]: true,
  [FORM_ITEM_NAME_LIST.CARD_COMPANY]: false,
  [FORM_ITEM_NAME_LIST.EXPIRATION_DATE]: false,
  [FORM_ITEM_NAME_LIST.OWNER_NAME]: false,
  [FORM_ITEM_NAME_LIST.CVC_NUMBERS]: false,
  [FORM_ITEM_NAME_LIST.PASSWORD]: false,
};

const useAddNewCardForm = () => {
  const cardNumbers = useCardNumbers();
  const expirationDate = useExpirationDate();
  const ownerName = useOwnerName();
  const {
    value: CVCNumbers,
    setValue: setCVCNumbers,
    errorMessage: CVCNumbersErrorMessage,
    isValid: isValidCVCNumbers,
    reset: resetCVCNumbers,
  } = useNumberInput(3);
  const {
    value: password,
    setValue: setPassword,
    errorMessage: passwordErrorMessage,
    isValid: isValidPassword,
    reset: resetPassword,
  } = useNumberInput(2);
  const {
    selected: cardCompany,
    handleSelect: handleSelectCardCompany,
    errorMessage: cardCompanyErrorMessage,
    reset: resetCardCompany,
  } = useDropdown<CardCompany>();
  const { showCase, addItemToShowCase, resetShowCase } = useShowCase(initialShowCaseValue);

  const completeList = {
    [FORM_ITEM_NAME_LIST.CARD_NUMBERS]: cardNumbers.isValid,
    [FORM_ITEM_NAME_LIST.EXPIRATION_DATE]: expirationDate.isValid,
    [FORM_ITEM_NAME_LIST.OWNER_NAME]: ownerName.isValid,
    [FORM_ITEM_NAME_LIST.CARD_COMPANY]: cardCompany !== null,
    [FORM_ITEM_NAME_LIST.CVC_NUMBERS]: isValidCVCNumbers,
    [FORM_ITEM_NAME_LIST.PASSWORD]: isValidPassword,
  };

  const handlers = {
    [FORM_ITEM_NAME_LIST.CARD_NUMBERS]: cardNumbers.handleCardNumbersChange,
    [FORM_ITEM_NAME_LIST.EXPIRATION_DATE]: expirationDate.handleExpirationDateChange,
    [FORM_ITEM_NAME_LIST.OWNER_NAME]: ownerName.handleOwnerNameChange,
    [FORM_ITEM_NAME_LIST.CARD_COMPANY]: handleSelectCardCompany,
    [FORM_ITEM_NAME_LIST.CVC_NUMBERS]: setCVCNumbers,
    [FORM_ITEM_NAME_LIST.PASSWORD]: setPassword,
  };

  // TODO: 각 input의 훅들이 반환하는 형태, 네이밍이 다르다보니 작성에 시간이 걸린다.
  useEffect(() => {
    if (cardNumbers.isValid) addItemToShowCase('cardCompany');
  }, [cardNumbers.isValid]);

  useEffect(() => {
    if (cardCompany !== null) addItemToShowCase('expirationDate');
  }, [cardCompany]);

  useEffect(() => {
    if (expirationDate.isValid) addItemToShowCase('ownerName');
  }, [expirationDate.isValid]);

  useEffect(() => {
    if (ownerName.isValid) addItemToShowCase('CVCNumbers');
  }, [ownerName.isValid]);

  useEffect(() => {
    if (isValidCVCNumbers) addItemToShowCase('password');
  }, [isValidCVCNumbers]);

  const clearForm = () => {
    cardNumbers.reset();
    expirationDate.reset();
    ownerName.reset();
    resetCardCompany();
    resetCVCNumbers();
    resetPassword();

    resetShowCase();
  };

  return {
    values: {
      [FORM_ITEM_NAME_LIST.CARD_NUMBERS]: cardNumbers.value,
      [FORM_ITEM_NAME_LIST.EXPIRATION_DATE]: expirationDate.value,
      [FORM_ITEM_NAME_LIST.OWNER_NAME]: ownerName.value,
      [FORM_ITEM_NAME_LIST.CARD_COMPANY]: cardCompany,
      [FORM_ITEM_NAME_LIST.CVC_NUMBERS]: CVCNumbers,
      [FORM_ITEM_NAME_LIST.PASSWORD]: password,
    },
    errorMessage: {
      [FORM_ITEM_NAME_LIST.CARD_NUMBERS]: cardNumbers.errorMessages,
      [FORM_ITEM_NAME_LIST.EXPIRATION_DATE]: expirationDate.errorMessages,
      [FORM_ITEM_NAME_LIST.OWNER_NAME]: ownerName.errorMessage,
      [FORM_ITEM_NAME_LIST.CARD_COMPANY]: cardCompanyErrorMessage,
      [FORM_ITEM_NAME_LIST.CVC_NUMBERS]: CVCNumbersErrorMessage,
      [FORM_ITEM_NAME_LIST.PASSWORD]: passwordErrorMessage,
    },
    handlers,
    showCase,
    completeList,
    clearForm,
  };
};

export default useAddNewCardForm;
