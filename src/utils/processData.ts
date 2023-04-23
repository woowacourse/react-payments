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

export const handleNumberInput = (data: string): string => {
  if (!/[0-9]/.test(data[data.length - 1])) {
    data = data.slice(0, -1);
  }
  return data;
};

export const changeNumberToMask = (data: string): string => {
  return '·'.repeat(data.length);
};
