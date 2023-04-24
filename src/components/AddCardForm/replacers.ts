const addHyphensInCardNumber = (cardNumber: string) => {
  const hyphenRemovedCardNumber = cardNumber.replaceAll('-', '');
  const cardNumberWithHyphens = (hyphenRemovedCardNumber.match(/.{1,4}/g) || []).join('-');

  return cardNumberWithHyphens;
};

const addSlashInExpirationDate = (expirationDate: string) => {
  const slashRemovedExpirationDate = expirationDate.replaceAll('/', '');
  const expirationDateWithSlash = (slashRemovedExpirationDate.match(/.{1,2}/g) || []).join('/');

  return expirationDateWithSlash;
};

export { addHyphensInCardNumber, addSlashInExpirationDate };
