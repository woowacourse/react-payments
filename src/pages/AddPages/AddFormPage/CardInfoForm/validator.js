import { getFormattedCardInfo } from '../../../../cardInfoFormatter';
import {
  FORMATTED_CARD_NUMBER_LENGTH,
  FORMATTED_EXPIRATION_DATE_LENGTH,
  SECURITY_CODE_LENGTH,
  FORMATTED_PASSWORD_LENGTH,
} from '../../../../constants';

export const isFormFulFilled = ({ cardInfo, initialCardInfo }) => {
  const { securityCode, password } = cardInfo;
  const { formattedNumber, formattedExpirationDate, formattedOwnerName } = getFormattedCardInfo({ cardInfo });

  return (
    isNumberFulfilled(formattedNumber) &&
    isExpirationDateFulfilled(formattedExpirationDate) &&
    isOwnerNameFulfilled(formattedOwnerName, initialCardInfo.ownerName) &&
    isSecurityCodeFulfilled(securityCode) &&
    isPasswordFulfilled(password)
  );
};

export const isNumberFulfilled = (formattedNumber) => {
  return formattedNumber.length === FORMATTED_CARD_NUMBER_LENGTH;
};

export const isExpirationDateFulfilled = (formattedExpirationDate) => {
  return formattedExpirationDate.length === FORMATTED_EXPIRATION_DATE_LENGTH;
};

export const isOwnerNameFulfilled = (formattedOwnerName, initialOwnerName) => {
  return formattedOwnerName && formattedOwnerName !== initialOwnerName;
};

export const isSecurityCodeFulfilled = (securityCode) => {
  return securityCode.length === SECURITY_CODE_LENGTH;
};

export const isPasswordFulfilled = (password) => {
  return Object.values(password).join('').length === FORMATTED_PASSWORD_LENGTH;
};

export const isCardNameFulfilled = (company, initialCompany) => {
  return company.name !== initialCompany.name && company.color !== initialCompany.color;
};
