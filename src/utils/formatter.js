export const cardSerialNumberFormatter = (serialNumber) => {
  if (serialNumber.length > 16) throw Error('올바르지 않은 카드 번호입니다.');

  return serialNumber.match(/.{1,4}/g)?.join('-') || serialNumber;
};

export const MMYYDateFormatter = (date) => {
  if (date.length > 4) throw Error('올바르지 않은 날짜 형식입니다.');

  return date.match(/.{1,2}/g)?.join('/') || date;
};
