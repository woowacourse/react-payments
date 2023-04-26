import { PAGE_TITLE, PageTitle } from '../constants/pathname';
import { CardNumbers, ExpirationDate, OwnerName, Password, SecurityCode } from './state';

export const isPageTitleKey = (value: unknown): value is keyof PageTitle => {
  const pathname = value as PageTitle;

  return pathname && typeof pathname === 'string' && pathname in PAGE_TITLE;
};

export const isCardNumbers = (state: unknown): state is CardNumbers => {
  const cardNumbers = state as CardNumbers;
  const keys = ['firstCardNumber', 'secondCardNumber', 'thirdCardNumber', 'fourthCardNumber'];

  return cardNumbers && typeof cardNumbers === 'object' && keys.every(key => key in cardNumbers);
};

export const isExpirationDate = (state: unknown): state is ExpirationDate => {
  const expirationData = state as ExpirationDate;
  const keys = ['month', 'year'];

  return (
    expirationData && typeof expirationData === 'object' && keys.every(key => key in expirationData)
  );
};

export const isOwnerName = (state: unknown): state is OwnerName => {
  const ownerName = state as OwnerName;

  return typeof ownerName === 'string' || !ownerName;
};

export const isSecurityCode = (state: unknown): state is SecurityCode => {
  const securityCode = state as SecurityCode;

  return typeof securityCode === 'string';
};

export const isPassword = (state: unknown): state is Password => {
  const password = state as Password;
  const keys = ['firstPassword', 'secondPassword'];

  return password && typeof password === 'object' && keys.every(key => key in password);
};
