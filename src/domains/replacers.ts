const FOUR_CHARACTER_CHUNKER = /.{1,4}/g;
const TWO_CHARACTER_CHUNKER = /.{1,2}/g;

const addHyphensInCardNumber = (cardNumber: string) => {
  const hyphenRemovedCardNumber = cardNumber.replaceAll('-', '');
  const cardNumberWithHyphens = (hyphenRemovedCardNumber.match(FOUR_CHARACTER_CHUNKER) || []).join('-');

  return cardNumberWithHyphens;
};

const addSlashInExpirationDate = (expirationDate: string) => {
  const slashRemovedExpirationDate = expirationDate.replaceAll('/', '');
  const expirationDateWithSlash = (slashRemovedExpirationDate.match(TWO_CHARACTER_CHUNKER) || []).join('/');

  return expirationDateWithSlash;
};

export { addHyphensInCardNumber, addSlashInExpirationDate };
