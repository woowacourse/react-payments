import { ChangeEvent } from 'react';
import {
  SerialNumbers,
  ExpirationDate,
  OwnerName,
  SecurityCode,
  Password,
  SetSerialNumbers,
  SetExpirationDate,
  SetOwnerName,
  SetSecurityCode,
  SetPassword,
} from '../types/state';
import {
  isSerialNumbers,
  isExpirationDate,
  isOwnerName,
  isPassword,
  isSecurityCode,
} from '../types/typeGuard';

export const useInputBox = (
  validate: (value: string) => boolean,
  state: SerialNumbers | ExpirationDate | OwnerName | SecurityCode | Password,
  setState:
    | SetSerialNumbers
    | SetExpirationDate
    | SetOwnerName
    | SetSecurityCode
    | SetPassword
) => {
  const onChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!validate(value)) {
      return;
    }

    if (isSerialNumbers(state)) {
      const setSerialNumbers = setState as SetSerialNumbers;
      setSerialNumbers({
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
