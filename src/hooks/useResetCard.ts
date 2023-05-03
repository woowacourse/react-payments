import { useContext } from 'react';

import CardContext from '../contexts/CardContext';

import { DEFAULT_CARD_INFO_STATE } from '../constants/state';

export const useResetCard = () => {
  const {
    setSerialNumbers,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    setCompany,
    setNickname,
  } = useContext(CardContext);

  const resetCard = () => {
    setSerialNumbers(() => DEFAULT_CARD_INFO_STATE.SERIAL_NUMBERS);
    setExpirationDate(() => DEFAULT_CARD_INFO_STATE.EXPIRATION_DATE);
    setOwnerName(() => DEFAULT_CARD_INFO_STATE.OWNER_NAME);
    setSecurityCode(() => DEFAULT_CARD_INFO_STATE.SECURITY_CODE);
    setPassword(() => DEFAULT_CARD_INFO_STATE.PASSWORD);
    setCompany(() => DEFAULT_CARD_INFO_STATE.COMPANY);
    setNickname(() => DEFAULT_CARD_INFO_STATE.NICK_NAME);
  };

  return resetCard;
};
