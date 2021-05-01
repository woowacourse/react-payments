import ValidationError from '../error/ValidationError';

export const cardSerialNumberFormatter = (serialNumber) => {
  if (serialNumber.length > 16) throw new ValidationError('올바르지 않은 카드 번호입니다.');

  const maskedSerialNumber =
    serialNumber.slice(0, 8) + '●'.repeat(serialNumber.length > 8 ? serialNumber.length - 8 : 0);
  return maskedSerialNumber.match(/.{1,4}/g)?.join('-') || maskedSerialNumber;
};

export const MMYYDateFormatter = (date) => {
  if (date.length > 4) throw new ValidationError('올바르지 않은 날짜 형식입니다.');

  return date.match(/.{1,2}/g)?.join('/') || date;
};
