import { INPUT_TYPE } from '../constant';

export default {
  validateCardNumber: cardNumber => {
    const cardNumberRegex = /[0-9]{4}/;

    return cardNumberRegex.test(cardNumber);
  },

  validateDate: date => {
    const dateRegex = /[0-9]{2,2}/;

    return dateRegex.test(date);
  },

  validateExpiredDate: date => {
    const expiredDateRegex = /[0-9]{2}/;

    return expiredDateRegex.test(date);
  },

  validatePassword: password => {
    const securityNumberRegex = /[0-9]/;

    return securityNumberRegex.test(password);
  },

  isInvalidInputData: (regex, data, inputType) => {
    return !regex.test(data) && inputType !== INPUT_TYPE.BACKWARD;
  },
};
