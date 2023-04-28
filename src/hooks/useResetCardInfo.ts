import { useContext } from 'react';

import CardInfoContext from '../contexts/CardInfoContext';

import { DEFAULT_CARD_INFO_STATE } from '../constants/state';

export const useResetCardInfo = () => {
  const {
    setCardNumbers,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    setCardCompany,
    setCardAlias,
  } = useContext(CardInfoContext);

  const resetCardInfo = () => {
    setCardNumbers(() => DEFAULT_CARD_INFO_STATE.CARD_NUMBERS);
    setExpirationDate(() => DEFAULT_CARD_INFO_STATE.EXPIRATION_DATE);
    setOwnerName(() => DEFAULT_CARD_INFO_STATE.OWNER_NAME);
    setSecurityCode(() => DEFAULT_CARD_INFO_STATE.SECURITY_CODE);
    setPassword(() => DEFAULT_CARD_INFO_STATE.PASSWORD);
    setCardCompany(() => DEFAULT_CARD_INFO_STATE.CARD_COMPANY);
    setCardAlias(() => DEFAULT_CARD_INFO_STATE.CARD_ALIAS);
  };

  return resetCardInfo;
};
