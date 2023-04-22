export const DATE_OR_EMPTY_REGEX = /^(0[1-9]|1[0-2])([0-9]{2})$/;
export const ALPHA_OR_EMPTY_REGEXP = /(^$|^[a-zA-Z][a-zA-Z ]*$)/;
export const CONTINUOUS_EMPTY_REGEXP = /[ ]{2,}/;

const validateCardNumber = (cardNumber: string) => {
  if (/^\d{4}$/.test(cardNumber)) {
    throw new Error();
  }
};

const validateExpirationDate = (expirationDate: string) => {
  if (/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expirationDate)) {
    throw new Error();
  }
};

const validateOwnerName = (ownerName: string) => {
  if (/^[A-Z]{0,30}$/.test(ownerName)) {
    throw new Error();
  }
};

const validateSecurityCode = (securityCode: string) => {
  if (/^\d{3}$/.test(securityCode)) {
    throw new Error();
  }
};

const validatePassword = (password: string) => {
  if (/^\d{1}$/.test(password)) {
    throw new Error();
  }
};
