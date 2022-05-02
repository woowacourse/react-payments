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

  validateCardNumbers: cardNumbers => {
    const cardNumbersRegex = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;

    return cardNumbersRegex.test(cardNumbers);
  },

  validateExpiredDate: expiredDate => {
    const expiredDateRegex = /[0-9]{2}\/[0-9]{2}/;

    if (!expiredDateRegex.test(expiredDate)) {
      return false;
    }
    let [month, year] = expiredDate.split('/');
    month = Number(month);
    year = Number(year);

    if (1 > month || 12 < month) {
      return false;
    }

    const today = new Date();
    const currentMonth = Number(today.getMonth());
    const currentYear = today.getFullYear() % 100;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }

    return true;
  },

  validateOwnerName: ownerName => {
    if (ownerName.trim().length === 0) {
      return false;
    }
    const ownerNameRegex = /^[A-Z ]{1,30}$/;

    return ownerNameRegex.test(ownerName);
  },

  validateSecurityNumber: securityNumber => {
    const securityNumberRegex = /^[0-9]{3}$/;

    return securityNumberRegex.test(securityNumber);
  },

  validatePassword: password => {
    const securityNumberRegex = /^[0-9]{2}$/;

    return securityNumberRegex.test(password);
  },

  isInvalidInputData: (regex, data, inputType) => {
    return !regex.test(data) && inputType !== INPUT_TYPE.BACKWARD;
  },
};
