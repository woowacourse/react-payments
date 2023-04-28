import { useContext } from 'react';

import CardInfoContext from '../contexts/CardInfoContext';

import { DEFAULT_STATE } from '../constants/state';

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
    setCardNumbers(() => DEFAULT_STATE.CARD_NUMBERS);
    setExpirationDate(() => DEFAULT_STATE.EXPIRATION_DATE);
    setOwnerName(() => DEFAULT_STATE.OWNER_NAME);
    setSecurityCode(() => DEFAULT_STATE.SECURITY_CODE);
    setPassword(() => DEFAULT_STATE.PASSWORD);
    setCardCompany(() => DEFAULT_STATE.CARD_COMPANY);
    setCardAlias(() => DEFAULT_STATE.CARD_ALIAS);
  };

  return resetCardInfo;
};
