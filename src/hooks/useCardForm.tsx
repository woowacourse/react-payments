import { useState } from "react";
import isNumberWithinRange from "../utils/isNumberWithinRange";
import { isValidateExpirationDate, isValidateCvc, isValidCardNumber } from "../utils/validation";

export type cardNumber = {
	first: string;
	second: string;
	third: string;
	fourth: string;
};

export type date = {
	month: string;
	year: string;
};

const useCardForm = () => {
	const [cardNumber, setCardNumber] = useState<cardNumber>({
		first: "",
		second: "",
		third: "",
		fourth: "",
	});

	const [expirationDate, setExpirationDate] = useState<date>({
		month: "",
		year: "",
	});

	const [cvcNumber, setCvcNumber] = useState<string>("");
	const [cardCompany, setCardCompany] = useState<string>("");
	const [cardPassword, setCardPassword] = useState<string>("");

	const isComplete = {
		cardNumber: isValidCardNumber(cardNumber),
		expirationDate: isValidateExpirationDate(expirationDate),
		cvc: isValidateCvc(cvcNumber),
		company: cardCompany !== "",
		password: cardPassword.length === 2 && isNumberWithinRange(cardPassword, 2),
	};

	return {
		cardNumber,
		setCardNumber,
		expirationDate,
		setExpirationDate,
		cvcNumber,
		setCvcNumber,
		cardCompany,
		setCardCompany,
		cardPassword,
		setCardPassword,
		isComplete,
	};
};

export default useCardForm;
