import { useContext } from 'react';

import CardInfoContext from '../contexts/CardInfoContext';

import { DEFAULT_CARD_INFO_STATE } from '../constants/state';
import { CardInfo } from '../types/state';

export const useInitCardInfo = () => {
  const {
    setCardNumbers,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    setCardCompany,
    setCardAlias,
  } = useContext(CardInfoContext);

  const initCardInfo = (cardInfo?: CardInfo) => {
    setCardNumbers(() => (cardInfo ? cardInfo.cardNumbers : DEFAULT_CARD_INFO_STATE.CARD_NUMBERS));
    setExpirationDate(() =>
      cardInfo ? cardInfo.expirationDate : DEFAULT_CARD_INFO_STATE.EXPIRATION_DATE
    );
    setOwnerName(() => (cardInfo ? cardInfo.ownerName : DEFAULT_CARD_INFO_STATE.OWNER_NAME));
    setSecurityCode(() =>
      cardInfo ? cardInfo.securityCode : DEFAULT_CARD_INFO_STATE.SECURITY_CODE
    );
    setPassword(() => (cardInfo ? cardInfo.password : DEFAULT_CARD_INFO_STATE.PASSWORD));
    setCardCompany(() => (cardInfo ? cardInfo.cardCompany : DEFAULT_CARD_INFO_STATE.CARD_COMPANY));
    setCardAlias(() => (cardInfo ? cardInfo.cardAlias : DEFAULT_CARD_INFO_STATE.CARD_ALIAS));
  };

  return initCardInfo;
};
