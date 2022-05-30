/* eslint-disable react-hooks/rules-of-hooks */
import { CRYPTO_STRING } from 'constants';
import { CARD_NUMBER, COMPANY, EXPIRY_DATE, PASSWORD, PRIVACY_CODE } from 'constants';
import useIsFilled from 'hooks/useIsFilled';
import reducer from 'page/cardAddUpdate/reducer';
import { createContext, useReducer } from 'react';

export const CardInfoContext = createContext();

export const initialCardInfo = {
  alias: '',
  theme: '',
  company: '',
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expiryDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  privacyCode: '',
  password: {
    first: '',
    second: '',
    third: CRYPTO_STRING,
    fourth: CRYPTO_STRING,
  },
};

const cardInfoProvider = () => {
  const [cardInfo, dispatch] = useReducer(reducer, initialCardInfo);
  const { cardNumber, expiryDate, company, password, privacyCode } = cardInfo;

  const [isCompanyFilled] = useIsFilled(COMPANY, company, false);
  const [isCardNumberFilled] = useIsFilled(CARD_NUMBER, cardNumber, false);
  const [isExpiryDateFilled] = useIsFilled(EXPIRY_DATE, expiryDate, false);
  const [isPrivacyCodeFilled] = useIsFilled(PRIVACY_CODE, privacyCode, false);
  const [isPasswordFilled] = useIsFilled(PASSWORD, password, false);
  const isFullFilled =
    isCompanyFilled &&
    isCardNumberFilled &&
    isExpiryDateFilled &&
    isPrivacyCodeFilled &&
    isPasswordFilled;

  return {
    CardInfoContext,
    value: {
      cardInfo,
      isCompanyFilled,
      isCardNumberFilled,
      isExpiryDateFilled,
      isPrivacyCodeFilled,
      isPasswordFilled,
      isFullFilled,
      dispatch,
    },
  };
};

export default cardInfoProvider;
