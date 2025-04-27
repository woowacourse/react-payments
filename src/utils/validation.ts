import { cardNumber, date } from "../components/page/CardInfo";

export const EXPIRATION_MAX_LENGTH = 2;
export const CVC_MAX_LENGTH = 3;
export const CARD_MAX_LENGTH = 4;
export const PASSWORD_MAX_LENGTH = 2;

export const getCurrentYear = () => new Date().getFullYear() % 100;

export const isNumberWithinRange = (value: string, maxLength: number): boolean => {
	const regex = new RegExp(`^(?:\\d{1,${maxLength}})?$`);
	return regex.test(value);
};

export const isValidMonth = (value: string): boolean => {
	if (!isNumberWithinRange(value, EXPIRATION_MAX_LENGTH)) return false;
	const month = Number(value);
	return month >= 1 && month <= 12;
};

export const isValidYear = (value: string): boolean => {
	if (!isNumberWithinRange(value, EXPIRATION_MAX_LENGTH)) return false;
	const year = Number(value);
	const currentYear = getCurrentYear();
	return year >= currentYear || year === 0;
};

export const isValidExpirationDate = (date: { month: string; year: string }) => {
	return isValidMonth(date.month) && isValidYear(date.year);
};

export const isValidCardNumber = (cardNumber: cardNumber) => {
	return Object.values(cardNumber).every((value) => value.length === CARD_MAX_LENGTH && isNumberWithinRange(value, 4));
};

export const isValidateExpirationDate = (expirationDate: date) => {
	return expirationDate.month.length === EXPIRATION_MAX_LENGTH && expirationDate.year.length === EXPIRATION_MAX_LENGTH && isValidExpirationDate(expirationDate);
};

export const isValidateCvc = (cvcNumber: string) => {
	return cvcNumber.length === CVC_MAX_LENGTH && isNumberWithinRange(cvcNumber, 3);
};
