const splitStringIntoGroups = (str: string, groupSize: number): string[] => {
  const result = [];
  let temp = [];

  for (let index = 0; index < str.length; index++) {
    if (index !== 0 && (index + 1) % groupSize === 0) {
      temp.push(str[index]);

      result.push(temp.join(''));
      temp = [];
    }
    temp.push(str[index]);
  }
  return result;
};

export const formatCardNumber = (cardNumber: string): string => {
  if (cardNumber.length <= 4) return cardNumber;
  const splitCardNumber = splitStringIntoGroups(cardNumber, 4)
    .map((number, index) => {
      if (index > 1) return '*'.repeat(number.length);
      return number;
    })
    .join('-');
  return splitCardNumber;
};

const MONTH_DATA = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
export const formatExpireDate = (expireDate: string): string => {
  if (expireDate[0] !== '0' && expireDate[0] !== '1') return '';
  if (expireDate.length > 1 && !MONTH_DATA.includes(`${expireDate[0]}${expireDate[1]}`)) return '';

  const nowLength = expireDate.length;
  const nowString = expireDate.split('');
  if (nowLength === 3 && nowString.includes('/')) {
    return expireDate.slice(0, -1);
  }
  if (nowLength === 3) {
    return `${expireDate[0]}${expireDate[1]}/${expireDate[2]}`;
  }
  return expireDate;
};

const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const handleNumberInput = (data: string): string => {
  if (!NUMBERS.includes(data[data.length - 1])) {
    data = data.slice(0, -1);
  }

  return data;
};

const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const isAlphabetInput = (data: string): boolean => {
  return ALPHABET.includes(data);
};

export const isNumberInput = (data: string): boolean => {
  return NUMBERS.includes(data);
};

export const changeNumberToMask = (data: string): string => {
  return '·'.repeat(data.length);
};
