import { CardType } from 'types';

const splitCardNumbers = (numbers: CardType['cardNumber'], separator: string) =>
  numbers.match(/[\d•]{1,4}/g)?.join(separator) as string;
const isValidDate = (date: CardType['validDate']) =>
  /^$|^[0-9]{0,2}[/]{0,1}[0-9]{0,2}$/.test(date);
const isValidOwnerName = (ownerName: CardType['cardOwnerName']) =>
  /^$|[a-zA-Z]$/.test(ownerName);
const isValidCVC = (CVC: CardType['cardCVC']) => /^$|^[0-9]{0,3}$/.test(CVC);
const isValidPassword = (password: CardType['cardPassword']) =>
  /^$|^[0-9]{0,1}$/.test(password);
const isNumber = (data: string) => /[0-9]/.test(data);

export {
  splitCardNumbers,
  isValidOwnerName,
  isValidDate,
  isValidCVC,
  isValidPassword,
  isNumber,
};
