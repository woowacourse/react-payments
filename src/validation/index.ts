import { INPUT_TYPE } from 'constant';

const validator = {
  validateCardNumber: (cardNumber: string) => {
    const cardNumberRegex = /^[0-9]{4,4}$/;

    return cardNumberRegex.test(cardNumber);
  },

  validateDate: (date: string) => {
    const dateRegex = /^[0-9]{2,2}$/;

    return dateRegex.test(date);
  },

  validateOwnerName: (name: string) => {
    const ownerNameRex = /^[A-Z ]{1,30}$/;

    return ownerNameRex.test(name);
  },

  validateExpiredDate: (date: string) => {
    const expiredDateRegex = /^[0-9]{2,2}$/;

    return expiredDateRegex.test(date);
  },

  validateSecurityNumber: (securityNumber: string) => {
    const securityNumberRegex = /^[0-9]{3,3}$/;

    return securityNumberRegex.test(securityNumber);
  },

  validatePassword: (password: string) => {
    const securityNumberRegex = /[0-9]/;

    return securityNumberRegex.test(password);
  },
};

export default validator;
