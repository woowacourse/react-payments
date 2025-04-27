import { useState } from "react";
import { isValidCardNumber } from "../utils/validation";

export interface CardNumber {
	first: string;
	second: string;
	third: string;
	fourth: string;
}

const useCardNumber = () => {
	const [cardNumber, setCardNumber] = useState<CardNumber>({
		first: "",
		second: "",
		third: "",
		fourth: "",
	});
	const [error, setError] = useState({ first: "", second: "", third: "", fourth: "" });
	const isComplete = isValidCardNumber(cardNumber);

	return { cardNumber, setCardNumber, error, setError, isComplete };
};
export default useCardNumber;
