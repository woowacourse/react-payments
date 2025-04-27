import { useState } from "react";
import { CARD_MAX_LENGTH, isNumberWithinRange, isValidCardNumber } from "../utils/validation";
import { MESSAGE } from "../components/form/constants/error";

export interface CardNumberType {
	first: string;
	second: string;
	third: string;
	fourth: string;
}

const useCardNumber = () => {
	const [cardNumber, setCardNumber] = useState<CardNumberType>({
		first: "",
		second: "",
		third: "",
		fourth: "",
	});
	const [error, setError] = useState({ first: "", second: "", third: "", fourth: "" });
	const isComplete = isValidCardNumber(cardNumber);

	const onChange = (order: keyof CardNumberType, value: string) => {
		setCardNumber({ ...cardNumber, [order]: value });

		if (!isNumberWithinRange(value, CARD_MAX_LENGTH)) {
			setError({ ...error, [order]: MESSAGE.INVALID_NUMBER });
			return;
		}

		setError({ ...error, [order]: "" });
	};

	const onBlur = (order: keyof CardNumberType, value: string) => {
		if (value.length < CARD_MAX_LENGTH) setError({ ...error, [order]: MESSAGE.INPUT_LENGTH_LIMIT(CARD_MAX_LENGTH) });
	};

	return { cardNumber, setCardNumber, error, setError, isComplete, onChange, onBlur };
};
export default useCardNumber;
