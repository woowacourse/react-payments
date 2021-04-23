export const cardSerialNumberFormatter = (serialnumber) => {
  if (serialnumber.length > 16) return;

  return serialnumber.match(/.{1,4}/g)?.join('-') || serialnumber;
};
