import { ChangeEvent } from 'react';
import {
  CardNumbers,
  ExpirationDate,
  OwnerName,
  SecurityCode,
  Password,
  SetCardNumbers,
  SetExpirationDate,
  SetOwnerName,
  SetSecurityCode,
  SetPassword,
} from '../types/state';
import {
  isCardNumbers,
  isExpirationDate,
  isOwnerName,
  isPassword,
  isSecurityCode,
} from '../types/typeGuard';

export const useInputBox = (
  validate: (value: string) => boolean,
  state: CardNumbers | ExpirationDate | OwnerName | SecurityCode | Password,
  setState: SetCardNumbers | SetExpirationDate | SetOwnerName | SetSecurityCode | SetPassword
) => {
  const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    if (!validate(value)) {
      return;
    }

    if (isCardNumbers(state)) {
      const setCardNumbers = setState as SetCardNumbers;
      setCardNumbers({
        ...state,
        [name]: value,
      });
    } else if (isExpirationDate(state)) {
      const setExpirationDate = setState as SetExpirationDate;
      setExpirationDate({
        ...state,
        [name]: value,
      });
    } else if (isOwnerName(state)) {
      const setOwnerName = setState as SetOwnerName;
      setOwnerName(value.toUpperCase());
    } else if (isSecurityCode(state)) {
      const setSecurityCode = setState as SetSecurityCode;
      setSecurityCode(value);
    } else if (isPassword(state)) {
      const setPassword = setState as SetPassword;
      setPassword({
        ...state,
        [name]: value,
      });
    }
  };

  return onChange;
};
