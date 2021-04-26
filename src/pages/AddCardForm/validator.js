export const isDigitKey = (key) => {
  return /^\d{1}$/.test(key);
};

export const isValidSerialNumber = (serialNumber) => {
  return /^([0-9]{16})$/.test(serialNumber);
};

export const isValidDateFormat = (date) => {
  return /^(?:0[1-9]|1[0-2])(\d{2})$/.test(date);
};

export const isValidUserName = (userName) => {
  return /^([a-zA-Z ]{0,30})$/.test(userName);
};
