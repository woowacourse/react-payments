const splitCardNumbers = numbers => numbers.match(/[\d•]{1,4}/g)?.join('-');
const isValidDate = date => /^$|^[0-9]{0,2}[/]{0,1}[0-9]{0,2}$/.test(date);
const isValidCVC = CVC => /^$|^[0-9]{0,3}$/.test(CVC);
const isValidPassword = password => /^$|^[0-9]{0,1}$/.test(password);

export { splitCardNumbers, isValidDate, isValidCVC, isValidPassword };
