const splitCardNumbers = (numbers, separator) =>
  numbers.match(/[\d•]{1,4}/g)?.join(separator);
const isValidDate = date => /^$|^[0-9]{0,2}[/]{0,1}[0-9]{0,2}$/.test(date);
const isValidOwnerName = ownerName => /^$|[a-zA-Z]$/.test(ownerName);
const isValidCVC = CVC => /^$|^[0-9]{0,3}$/.test(CVC);
const isValidPassword = password => /^$|^[0-9]{0,1}$/.test(password);
const isNumber = data => /[0-9]/.test(data);

export {
  splitCardNumbers,
  isValidOwnerName,
  isValidDate,
  isValidCVC,
  isValidPassword,
  isNumber,
};
