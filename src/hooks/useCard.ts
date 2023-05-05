import { useState } from 'react';

import {
  SerialNumbers,
  ExpirationDate,
  OwnerName,
  Password,
  nickname,
  Company,
} from '../types/state';
import { DEFAULT_CARD_INFO_STATE } from '../constants/state';

export const useCard = () => {
  const [serialNumbers, setSerialNumbers] = useState<SerialNumbers>(
    DEFAULT_CARD_INFO_STATE.SERIAL_NUMBERS
  );
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>(
    DEFAULT_CARD_INFO_STATE.EXPIRATION_DATE
  );
  const [ownerName, setOwnerName] = useState<OwnerName>(
    DEFAULT_CARD_INFO_STATE.OWNER_NAME
  );
  const [securityCode, setSecurityCode] = useState(
    DEFAULT_CARD_INFO_STATE.SECURITY_CODE
  );
  const [password, setPassword] = useState<Password>(
    DEFAULT_CARD_INFO_STATE.PASSWORD
  );
  const [company, setCompany] = useState<Company>(
    DEFAULT_CARD_INFO_STATE.COMPANY
  );
  const [nickname, setNickname] = useState<nickname>(
    DEFAULT_CARD_INFO_STATE.NICK_NAME
  );

  return {
    serialNumbers,
    setSerialNumbers,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
    company,
    setCompany,
    nickname,
    setNickname,
  };
};
