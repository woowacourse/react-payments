import { cardNumber, date } from "../App";

const EXPIRATION_MAX_LENGTH = 2;

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
	return Object.values(cardNumber).every((value) => value.length === 4 && isNumberWithinRange(value, 4));
};

export const isValidateExpirationDate = (expirationDate: date) => {
	return expirationDate.month.length === 2 && expirationDate.year.length === 2 && isValidExpirationDate(expirationDate);
};

export const isValidateCvc = (cvcNumber: string) => {
	return cvcNumber.length === 3 && isNumberWithinRange(cvcNumber, 3);
};
