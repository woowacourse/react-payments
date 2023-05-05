import { useContext } from 'react';

import CardContext from '../contexts/CardContext';

import { DEFAULT_CARD_INFO_STATE } from '../constants/state';
import { Card } from '../types/state';

export const useInitCard = () => {
  const {
    setSerialNumbers,
    setExpirationDate,
    setOwnerName,
    setSecurityCode,
    setPassword,
    setCompany,
    setNickname,
  } = useContext(CardContext);

  const initCard = (card?: Card) => {
    setSerialNumbers(() =>
      card ? card.serialNumbers : DEFAULT_CARD_INFO_STATE.SERIAL_NUMBERS
    );
    setExpirationDate(() =>
      card ? card.expirationDate : DEFAULT_CARD_INFO_STATE.EXPIRATION_DATE
    );
    setOwnerName(() =>
      card ? card.ownerName : DEFAULT_CARD_INFO_STATE.OWNER_NAME
    );
    setSecurityCode(() =>
      card ? card.securityCode : DEFAULT_CARD_INFO_STATE.SECURITY_CODE
    );
    setPassword(() =>
      card ? card.password : DEFAULT_CARD_INFO_STATE.PASSWORD
    );
    setCompany(() => (card ? card.company : DEFAULT_CARD_INFO_STATE.COMPANY));
    setNickname(() =>
      card ? card.nickname : DEFAULT_CARD_INFO_STATE.NICK_NAME
    );
  };

  return initCard;
};
